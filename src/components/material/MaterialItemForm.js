import React from 'react';
import { Form, Button, Header, Popup, Icon, Dropdown } from 'semantic-ui-react';


export const MaterialItemForm = ({ material, icon, titulo, position,
    buttonFloated, buttonTitle, handleChange, handleClick, seleciona, limpa }) =>
    <Popup wide="very"
        trigger={
            buttonTitle ?
                <Button onClick={() => limpa()} floated={buttonFloated} size="mini" basic><Icon name={icon}></Icon>{buttonTitle}</Button>
                : <Button onClick={() => seleciona(material)} floated={buttonFloated} size="mini" icon={icon} basic></Button>
        }
        content={
            <Form>
                <Header>{titulo}</Header>
                <Form.Field>
                    <label>Título</label>
                    <input
                        type="text"
                        placeholder='Título'
                        value={material.titulo}
                        name="titulo"
                        onChange={handleChange} />
                </Form.Field>
                <Form.Field >
                    <label>Link</label>
                    <input
                        type="text"
                        placeholder='Link'
                        value={material.url}
                        name="url"
                        onChange={handleChange} />
                </Form.Field>
                <Form.Field >
                    <label>Tipo Material</label>
                    <Dropdown selection
                        onChange={handleChange}
                        name='tipo'
                        value={material.tipo}
                        options={[
                            { key: "tipo-mat-1", text: "Documento", value: "D", icon: "file outline" },
                            { key: "tipo-mat-2", text: "Vídeo", value: "V", icon: "play" },
                            { key: "tipo-mat-3", text: "Questionário", value: "Q", icon: "question circle outline" }
                        ]} />
                </Form.Field>
                <Form.Field >
                    <label>&nbsp;</label>
                    <Button onClick={() => handleClick("SM")} floated="right" icon="check" basic></Button>
                </Form.Field>
            </Form>
        }
        on='click'
        position={position}
    />