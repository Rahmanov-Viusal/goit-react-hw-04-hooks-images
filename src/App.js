import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import pixabayAPI from './services/services';
import Section from './components/Section';
import Container from './components/Container';
import ErrorMessage from './components/ErrorMessage';
import Request from './components/Request';
import Button from './components/Button';
import Modal from './components/Modal';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeURL, setLargeURL] = useState('');

  useEffect(() => {
    if (!query) return;
    async function firstFetchImages(query, page) {
      await pixabayAPI.fetchImage(query, page).then(({ hits, total }) => {
        if (page === 1) {
          setImages([...hits]);
        } else {
          setImages(prevImg => [...prevImg, ...hits]);
        }
        setTotal(total);
        setStatus('resolved');
        if (!total) {
          setError('Something went wrong! Please, change your request!');
          setStatus('rejected');
        } else {
          setError(null);
        }
        scrollPage();
      });
    }
    setStatus('pending');
    firstFetchImages(query, page);
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = url => {
    setShowModal(!showModal);
    setLargeURL(url);
  };

  const scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />;
      <Section>
        <Container>
          {status === 'idle' && <Request />}
          {status === 'rejected' && <ErrorMessage message={error} />}
          <ImageGallery images={images} openModal={toggleModal} />
          {status === 'pending' && <Loader />}
          {total - page * 12 > 0 && status === 'resolved' && (
            <Button onClick={onLoadMore} />
          )}
        </Container>
      </Section>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeURL} alt="" />
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
