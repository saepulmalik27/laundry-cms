import React from 'react'
const useModal = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }

    return {
        isOpen, closeModal, openModal
    }
}

export default useModal