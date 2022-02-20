import React, { useState } from "react";
import dayjs from "dayjs";
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { 
  Button, 
  DeleteButtonContainer, 
  Separator, 
  UpdateModal, 
  DeleteButtonModal, 
  Icons
} from "../../../components";
import { 
  ButtonBox, 
  DragonsRecipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer
} from "./styles";


function Dragons({item, isClicked, setIsClicked}) {
  const [deleteModal, setDeleteModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)


  return (
    <>
      <DragonsContainer >
        <DragonsRecipe>
          <DateContainer>
            {dayjs(item.createdAt).format('DD/MM/YYYY')}
          </DateContainer>
        </DragonsRecipe>
        <DragonsRecipe>
          <NameContainer>
            {item.name}
          </NameContainer>
        </DragonsRecipe>
        <DragonsRecipe>
          <TypeContainer>
            {item.type}
          </TypeContainer>
        </DragonsRecipe>
        <ButtonBox>
          <Button onClick={() => setUpdateModal(true)} edit>
            <Icons icon={faPencilAlt} fa_pencil_check/>
          </Button>
          <Separator />
          <DeleteButtonContainer>
            <Button onClick={() => setDeleteModal(true)} del>
              <Icons icon={faTrashAlt} fa_trash />
            </Button>
          </DeleteButtonContainer>
        </ButtonBox>
        <UpdateModal
          updateModal={updateModal} 
          setUpdateModal={setUpdateModal} 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          item={item}
        />
        <DeleteButtonModal 
          deleteModal={deleteModal} 
          setDeleteModal={setDeleteModal}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          item={item}
        /> 
      </DragonsContainer>
      <Separator />
    </>
  )
}

export default Dragons