import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { WidgetForm } from "./form/WidgetForm";
import { IWidget } from "./Widget.types";

export interface IWidgetModalProps{
    isOpen: boolean;
    onClose: () => void;
    onDismiss: (widget?: IWidget) => void;
} 

export function WidgetModal(props: IWidgetModalProps){

    const { isOpen, onClose, onDismiss } = props;
      
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<IWidget>();

    function onSubmit(values: IWidget) {
        onClose()
        onDismiss(values);
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Configuração de componente
                    </ModalHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <WidgetForm errors={errors} register={register} />
                        </ModalBody>
                        <ModalFooter>
                            <Button 
                                variant='ghost' 
                                onClick={onClose}>
                                    Cancelar
                            </Button>
                            <Button 
                                type='submit'
                                colorScheme='blue'
                                isLoading={isSubmitting}
                                mr={3}>
                                Salvar
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}