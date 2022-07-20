import { Button, useDisclosure } from "@chakra-ui/react";
import interact from "interactjs";
import { useState } from "react";
import { IWidget } from "../components/widgetModal/Widget.types";
import { WidgetModal } from "../components/widgetModal/WidgetModal";

export function Home(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [widgets, setWidgets] = useState<IWidget[]>([]);

    function createWidgetHandler(widget: IWidget) {

        if(widgets.some(w => widget.title == w.title)){
            document.getElementById(widget.title)?.remove();
        };

        const newNode = document.createElement(widget.title);
        newNode.style.width = widget.width + 'px';
        newNode.style.height = widget.heigth + 'px';
        newNode.style.backgroundColor = '#4FD1C5';
        newNode.style.position = 'fixed';
        newNode.draggable = true;
        newNode.id = widget.title;

        document.getElementById('page')?.appendChild(newNode);

        const position = { x: 0, y: 0 }

        interact('#' + widget.title).draggable({
            listeners: {
                start (event) {
                console.log(event.type, event.target)
                },
                move (event) {
                position.x += event.dx
                position.y += event.dy

                event.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`
                },
            }
        });
            
        setWidgets([
            ...widgets,
            widget
        ]);
    }

    return (
        <div>
            <div 
                id="page"
                style={{
                    width:1000, 
                    height:1200, 
                    position:'absolute', 
                    backgroundColor:'white', 
                    top:'2%', 
                    left:'50%',
                    transform: 'translate(-50%, 0)'
                }}
            >
            </div>

            <Button onClick={onOpen}>
                +
            </Button>

            <WidgetModal 
                isOpen={isOpen}
                onClose={onClose}
                onDismiss={(widget?: IWidget) => widget && createWidgetHandler(widget)}/>
        </div>
    )
}