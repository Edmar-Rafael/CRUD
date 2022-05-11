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
import { useDispatch } from "react-redux";
import { requestDeleteDragon } from "../../store/ducks/delete";
import handleLanguage from "../../resources/LangSource";
import { toast } from "react-toastify";

function DeleteModal({item, deleteModal, setDeleteModal, isClicked, setIsClicked}) {
  const dispatch = useDispatch()

  async function handleDelete(id) {
    try {
      await dispatch(requestDeleteDragon(id))
      setIsClicked(!isClicked)
      toast.success(handleLanguage('deleteSuccess'), {position: 'top-center'})
    } catch(error) {
      return error
    }
  }

  return (
    
    <ModalContainer 
      closeTimeoutMS={2000}
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
            x={17} 
            y={17} 
            custom='true'
          >
            <Icons isModalOpen={deleteModal} icon={faTimes} fa_times='true'/>
          </Button>
        </ModalcloseButtom>
        <DeleteButtonContainer mobile_delete_modal='true'>
          <Button onClick={() => handleDelete(item.id)} mobile_modal_del='true'>
            <Icons icon={faTrashAlt} fa_trash='true'/>
          </Button>
        </DeleteButtonContainer>
      </ModalButtomContainer>
    </ModalContainer>
  )
}

export default DeleteModal