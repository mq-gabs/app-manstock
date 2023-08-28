import { useEffect, useState } from "react";
import { Button, Input, Loading, Modal, Select, UserCard } from "../../components";
import { useAuth } from "../../hooks";
import { StyledProfile } from "./profile.styles";
import { IUserData } from "../../interfaces";
import { getAllUsers } from "../../services";

interface IUserForDelete {
  id: string;
  name: string;
}

export const Profile = () => {
  const { userData } = useAuth();
  const isAdmin = userData.user.profile === 'admin';
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [profileType, setProfileType] = useState<string>("");
  const [users, setUsers] = useState<IUserData["user"][]>([]);
  const [userInfoForDelete, setUserInfoForDelete] = useState<IUserForDelete>({} as IUserForDelete);
  const [userInforForEdit, setUserInfoForEdit] = useState<IUserData["user"]>({} as IUserData["user"]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const isOwnData = userData.user.id === userInforForEdit.id;
  
  const handleEditOwnData = () => {
    setUserInfoForEdit(userData.user);
  }

  const handleEditUserData = (user: IUserData["user"]) => {
    setUserInfoForEdit(user);
  }

  const handleDeleteUser = () => {

  }

  const handleSaveData = () => {

  }

  const handleCreateNewUser = () => {
    
  }

  const handleClearInputs = () => {

  }

  const getUsers = async () => {
    if (!isAdmin) return;

    const data = await getAllUsers();

    setUsers(data);
  }
  
  useEffect(() => {
    getUsers();
    setUserInfoForEdit(userData.user);
  }, [])

  useEffect(() => {
    setEmail(userInforForEdit.email);
    setName(userInforForEdit.name);
    setProfileType(userInforForEdit.profile);
  }, [userInforForEdit])

  return(
    <StyledProfile isadmin={isAdmin}>
      <div className="user-form">
        <h3>Edite {isOwnData && 'seus'} os dados{!isOwnData && ` de ${userInforForEdit.name}`}</h3>
        {isAdmin && (
          <Button
            text='Edite os seus dados'
            color="secondary"
            onClick={handleEditOwnData}
          />
        )}
        <Input
          icon="name"
          placeholder="Nome"
          value={name}
          setValue={setName}
        />
        <Input
          icon="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          icon="password"
          type="password"
          placeholder="Senha atual"
          value={oldPassword}
          setValue={setOldPassword}
        />
        <Input
          icon="password"
          type="password"
          placeholder="Nova senha"
          value={newPassword}
          setValue={setNewPassword}
        />
        <Select
          options={[
            { id: 0, name: 'Administrador', value: 'admin' },
            { id: 1, name: 'Usuário padrão', value: 'default'},
          ]}
          setSelected={setProfileType}
          selected={profileType}
        />
        <Button
          text="salvar alterações"
          onClick={handleSaveData}
        />
        {isAdmin && (
          <>
          <Button
            text="limpar campos"
            color="secondary"
            iconName="cancel"
            onClick={handleClearInputs}
          />
          <Button
            text={"criar novo usuário"}
            iconName="newUser"
            onClick={handleCreateNewUser}
            />
          </>
        )}
      </div>
      {isAdmin && (
        <>
        <div className="users-list">
          {users.length !== 0 && users.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              created_at={user.created_at}
              updated_at={user.updated_at}
              profile={user.profile}
              onEdit={() => handleEditUserData(user)}
              onDelete={() => {
                setUserInfoForDelete({
                  id: user.id,
                  name: user.name,
                });
                setOpenModal(true);
              }}
            />
          ))}
          {users.length === 0 && (
            <Loading />
          )}
        </div>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onConfirm={handleDeleteUser}
          title="Atenção!"
          confirmText="Excluir"
          confirmColor="secondary"
          text={`Tem certeza que deseja excluir o usuário: ${userInfoForDelete.name}?`}
        />
        </>
      )}

    </StyledProfile>   
  );
}