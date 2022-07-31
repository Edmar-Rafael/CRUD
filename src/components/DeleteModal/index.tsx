import React from "react";
import { Button, DeleteButtonContainer, Icons } from "..";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  ModalContainer,
  Text,
  ModalMessage,
  ModalcloseButtom,
  ModalButtomContainer,
} from './styles'
import { requestDeleteDragon } from "../../store/ducks/delete";
import handleLanguage from "../../resources/LangSource";
import { toast } from "react-toastify";
import { Dragon, useAppDispatch } from "../../@types/types";

type DeleteModalProps = {
  item: Dragon;
  deleteModal: boolean;
  setDeleteModal: (value: boolean) => void;
  isClicked: boolean;
  setIsClicked: (value: boolean) => void
}


function DeleteModal(
  {item, deleteModal, setDeleteModal, isClicked, setIsClicked}: DeleteModalProps
  ) {
  const dispatch = useAppDispatch()

  async function handleDelete(id: number) {
    try {
      await dispatch(requestDeleteDragon(id))
      setIsClicked(!isClicked)
      toast.success(handleLanguage('deleteSuccess'), {position: 'top-center'})
    } catch(error) {
      console.log('Não deu')
    }
  }

  return (
    
    <ModalContainer 
      closeTimeoutMS={300}
      isOpen={deleteModal} 
      onRequestClose={() => setDeleteModal(false)}
      style={{overlay: {
        background: '#00000077',
        backdropFilter: 'blur(2px)'
      }}}
    >
      <ModalMessage>
        <Text>{handleLanguage('deleteModalMessage')}</Text>  
      </ModalMessage>
      <ModalButtomContainer>
        <ModalcloseButtom>
          < Button 
            onClick={() => setDeleteModal(false)}
            close_delete_modal
          >
            <Icons isModalOpen={deleteModal} faIcon={faTimes} fa_times />
          </Button>
        </ModalcloseButtom>
        <DeleteButtonContainer mobile_delete_modal>
          <Button onClick={() => handleDelete(item.id)} mobile_modal_del >
            <Icons faIcon={faTrashAlt} fa_trash />
          </Button>
        </DeleteButtonContainer>
      </ModalButtomContainer>
    </ModalContainer>
  )
}

export default DeleteModal