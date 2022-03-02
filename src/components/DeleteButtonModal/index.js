import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, DeleteButtonContainer, Icons } from "..";
import { deleteDragon } from "../../services/dragon";
import { ModalContainer } from "./styles";
import {
  Text,
  ModalMessage,
  ModalcloseButtom,
  ModalButtomContainer,
} from './styles'

function DeleteButtonModal({item, deleteModal, setDeleteModal, isClicked, setIsClicked}) {

  async function handleDelete(id) {
    await deleteDragon(id)
    setIsClicked(!isClicked)
  }

  return (
    
    <ModalContainer 
      closeTimeoutMS={2000}
      isOpen={deleteModal} 
      onRequestClose={() => setDeleteModal(false)}
      style={{overlay: {
        background: '#00000077',
        /* backdropFilter: 'blur(2px)' */
      }}}
    >
      <ModalMessage>
        <Text>Esta ação ira apagar o Dragão permanentemente!</Text>  
        <Text>This will delete the Dragon permanently!</Text>
      </ModalMessage>
      <ModalButtomContainer>
        <ModalcloseButtom>
          < Button 
            onClick={() => setDeleteModal(false)}
            x={17} 
            y={17} 
            custom
          >
            <Icons isModalOpened={deleteModal} icon={faTimes} fa_times/>
          </Button>
        </ModalcloseButtom>
        <DeleteButtonContainer mobile_delete_modal>
          <Button onClick={() => handleDelete(item.id)} mobile_modal_del>
            <Icons icon={faTrashAlt} fa_trash/>
          </Button>
        </DeleteButtonContainer>
      </ModalButtomContainer>
    </ModalContainer>
  )
}

export default DeleteButtonModal