import React from "react";
import { Button, DeleteButtonContainer, Icons, LoaderSpinner } from "..";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  ModalContainer,
  Text,
  ModalMessage,
  ModalcloseButtom,
  ModalButtomContainer,
  ModalloadingContainer,
} from './styles'
import { useDispatch, useSelector } from "react-redux";
import { requestDeleteDragon } from "../../store/ducks/delete";

function DeleteButtonModal({item, deleteModal, setDeleteModal, isClicked, setIsClicked}) {
  const loading = useSelector(({deleteDragonState}) => deleteDragonState.loading)
  const dispatch = useDispatch()

  async function handleDelete(id) {
    try {
      await dispatch(requestDeleteDragon(id))
      setIsClicked(!isClicked)
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