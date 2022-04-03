import Head from 'next/head';
import Image from 'next/image';
import Modal from '../components/Modal';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const confirmFunction = () => {
    router.push('/login');
  };
  return (
    <div className='mx-auto bg-zinc-100 h-screen '>
      <div className='w-1/2 h-full mx-auto'>
        <h1 className='text-2xl font-black text-center p-10'>
          Hey, click on the button to open the modal
        </h1>
        <button
          className=' px-16 py-1  mx-auto block bg-blue-500 text-white rounded-md'
          onClick={() => {
            setShowModal(true);
          }}
        >
          {' '}
          Open
        </button>

        {showModal && (
          <Modal color='black' bgColor='white' setShowModal={setShowModal}>
            <Modal.Title>Titolo del Modal</Modal.Title>
            <Modal.Content>
              Questo e' il testo del modal e puo' essere abbastanza lungo,
              spesso finisce con una domanda{' '}
            </Modal.Content>
            <Modal.Footer>
              <Modal.Button
                type='dismiss'
                onClick={() => {
                  setShowModal(false);
                }}
              >
                dismetti
              </Modal.Button>
              <Modal.Button type='accept' onClick={confirmFunction}>
                conferma
              </Modal.Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}
