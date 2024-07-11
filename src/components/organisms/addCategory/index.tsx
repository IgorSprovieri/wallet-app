import { Image, MainContainer, TextInput, TouchableOpacity } from "./styled";
import { AddImage, Circle } from "@/components/atoms";
import { postCategory } from "src/services/api";
import { icons } from "@/theme/icons";

import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { object, string } from "yup";
import { InitialValues } from "./types";

export const AddCategory: React.FC = () => {
  const { mutate } = useMutation({
    mutationFn: postCategory,
  });

  const validationSchema = object({
    name: string().required(),
    color: string().required(),
    icon_url: string().required(),
  });

  const initialValues: InitialValues = {
    name: "",
    color: "#E4E4E4",
    icon_url: "more-horizontal",
  };

  const { values } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (data) => mutate(data),
  });

  return (
    <MainContainer>
      <Circle color={values.color}>
        <Image source={icons[values.icon_url]} />
      </Circle>
      <TextInput placeholder="Categoria" />
      <TouchableOpacity>
        <AddImage />
      </TouchableOpacity>
    </MainContainer>
  );
};
