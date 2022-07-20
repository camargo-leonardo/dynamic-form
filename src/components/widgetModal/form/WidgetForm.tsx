import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { IWidget } from "../Widget.types";

export interface IWidgetFormProps{
    register: UseFormRegister<IWidget>;
    errors: FieldErrorsImpl<DeepRequired<IWidget>>
}

export function WidgetForm(props: IWidgetFormProps){

    const { register, errors } = props;

    return(
        <>
            <FormControl>
                <FormLabel htmlFor='title'>Titulo</FormLabel>
                <Input
                    id='title'
                    placeholder='Titulo'
                    {...register('title', {
                        required: 'Campo obrigatório'
                    })}
                />
                <FormErrorMessage>
                    {errors.title && errors.title.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='width'>Largura</FormLabel>
                <Input
                    id='width'
                    placeholder='Largura'
                    type='number'
                    {...register('width', {
                        required: 'Campo obrigatório'
                    })}
                />
                <FormErrorMessage>
                    {errors.width && errors.width.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='height'>Altura</FormLabel>
                <Input
                    id='height'
                    placeholder='Largura'
                    type='number'
                    {...register('heigth', {
                        required: 'Campo obrigatório'
                    })}
                />
                <FormErrorMessage>
                    {errors.heigth && errors.heigth.message}
                </FormErrorMessage>
            </FormControl>
        </>
    )
}