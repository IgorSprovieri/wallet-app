import { useContext, useEffect } from "react";
import { Background, Balance, DateInput, Header, Menu } from "../../components";
import {
  MainContainer,
  ContentContainer,
  HeaderContainer,
  Title,
} from "./styled";
import { MainContext } from "../../context";
import { ResumeTab, TransfersTab } from "../tabs";
import { CategoriesTab } from "../tabs/categories";
import { getCategories } from "../../libs/api";
import { useMutation, useQuery } from "react-query";
import { storage } from "../../libs/storage";

const Tab = () => {
  const { tab } = useContext(MainContext);

  const tabs = {
    Resume: <ResumeTab />,
    Transfers: <TransfersTab />,
    Categories: <CategoriesTab />,
  };

  return tabs[tab];
};

export const HomeScreen = () => {
  const { tab, setTab } = useContext(MainContext);
  const { categories, setCategories } = useContext(MainContext);

  const { data, mutate, isSuccess } = useMutation((email: string) =>
    getCategories(email)
  );

  const onStart = async () => {
    const user = await storage.getUser();
    mutate(user.email);
  };

  useEffect(() => {
    onStart();
  }, []);

  useEffect(() => {
    if (isSuccess === true) {
      setCategories(data);
    }
  }, [isSuccess]);

  const titles = {
    Resume: "Resumo Mensal",
    Transfers: "Transações",
    Categories: "Categorias",
  };

  return (
    <Background>
      <MainContainer>
        <Header name="Igor Sprovieri" />
        <Balance value={2226.73} />
        <Menu setTab={setTab} />
        <ContentContainer>
          <HeaderContainer>
            <Title>{titles[tab]}</Title>
            <DateInput date={new Date()} />
          </HeaderContainer>
          <Tab />
        </ContentContainer>
      </MainContainer>
    </Background>
  );
};
