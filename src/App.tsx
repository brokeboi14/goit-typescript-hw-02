import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import SearchBar from './components/SearchBar/SearcBar';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import toast from 'react-hot-toast';
import getImages, { Image, UnsplashResponse } from './api/images-api'
import { useState, useEffect, useRef } from 'react';
import './App.css';

interface ModalState {
  modalIsOpen: boolean;
  srcUrl: string;
  altDescription: string;
  authorName: string;
  likes: string;
  largeDescription?: string;
}

function App() {
  const MODAL_INITIAL_STATE: ModalState = {
    modalIsOpen: false,
    srcUrl: '',
    altDescription: '',
    authorName: '',
    likes: '',
    largeDescription: '',
  };

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modalState, setModalState] = useState<ModalState>(MODAL_INITIAL_STATE);
  const mainElem = useRef<HTMLDivElement>(null);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleModalOpen = (
    srcUrl: string,
    altDescription: string,
    authorName: string,
    likes: number,
    largeDescription?: string,
  ) => {
    setModalState({
      modalIsOpen: true,
      srcUrl,
      altDescription,
      authorName,
      likes: likes.toString(),
      largeDescription,
    });
  };

  const handleModalClose = () => {
    setModalState(MODAL_INITIAL_STATE);
  };

  useEffect(() => {
    const getImagesData = async () => {
      setLoading(true);
      setError(false);

      if (!query) {
        setShowLoadMoreBtn(false);
        setLoading(false);
        return;
      }

      try {
        const data: UnsplashResponse = await getImages(query, page);
        if (data.total === 0) {
          setShowLoadMoreBtn(false);
          toast.error('There are no results!');
          return;
        }

        setImages(prevImages => [...prevImages, ...data.results]);
        setShowLoadMoreBtn(data.total_pages > page);
      } catch (error) {
        setError(true);
        toast.error('An error occurred while fetching images.');
      } finally {
        setLoading(false);
      }
    };

    getImagesData();
  }, [query, page]);

  useEffect(() => {
    if (page === 1) return;
    mainElem.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [images, page]);

  return (
    <div ref={mainElem}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleModalOpen} />
      )}
      {showLoadMoreBtn && !loading && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMoreBtn} />
      )}
      {loading && <Loader />}
      <ImageModal onModalClose={handleModalClose} modalState={modalState} />
    </div>
  );
}

export default App;