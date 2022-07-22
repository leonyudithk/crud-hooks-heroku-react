import React from 'react';
import { Button, Input, Layout, Select, Tooltip } from 'antd';
import { ContentDiv, Form } from '../styles/styles';
import { UserOutlined, InfoCircleOutlined, LogoutOutlined } from "@ant-design/icons"
import useForm from '../hooks/useForm';
import axios from 'axios';
import { url } from '../helpers/url';
import { uploadFile } from '../helpers/uploadFile';




const RegistroEst = () => {
    const { Content } = Layout
    const { Option } = Select

    const [reset, data, handleChange, handleChangeSelect, handleUploadImg] = useForm({
        nombre: '',
        tipo: 'default',
        numero: '',
        celular: '',
        direccion: '',
        imagen: ''


    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data)
        axios.post(url, data)
            .then(() => reset())

    }

    const handleImg = ({ target }) => {
        const file = target.files[0]
        console.log('dentro del handle', file)
        uploadFile(file)
            .then(resp => handleUploadImg(resp))

    }

    return (
        <>
            <Content
                style={{
                    padding: '0 50px',
                    margin: "50px auto 0 auto"
                }}
            >
                <ContentDiv>
                    <h3 style={{ textAlign: "center" }}>Registro</h3>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            name="nombre"
                            onChange={handleChange}
                            value={data.nombre}
                            placeholder="Ingrese sus nombres y apellidos"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            suffix={
                                <Tooltip title="Nombres y Apellidos">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}

                                    />
                                </Tooltip>
                            }
                        />
                        <Select

                            name="tipo"
                            onChange={handleChangeSelect}
                            style={{
                                width: '100%',
                            }}
                            defaultValue="default"
                        >
                            <Option disabled value="default">Tipo de documento</Option>
                            <Option value="C.C">C.C</Option>
                            <Option value="C.E">C.E</Option>
                            <Option value="T.I">T.I</Option>
                        </Select>


                        <Input
                            name='numero'
                            onChange={handleChange}
                            value={data.numero}
                            placeholder="Número de documento"
                            suffix={
                                <Tooltip title="Numero del documento de identidad">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />

                        <Input.Group compact>
                            <Select
                                style={{
                                    width: '25%',
                                }}
                                defaultValue="57"
                            >
                                <Option value="57">+57</Option>
                            </Select>
                            <Input
                                name='celular'
                                onChange={handleChange}
                                value={data.celular}
                                style={{
                                    width: '75%',
                                }}
                                type="number"
                                placeholder="Numero de teléfono"
                                suffix={
                                    <Tooltip title="Numero celular">
                                        <InfoCircleOutlined
                                            style={{
                                                color: 'rgba(0,0,0,.45)',
                                            }}
                                        />
                                    </Tooltip>
                                }
                            />
                        </Input.Group>


                        <Input
                            name='direccion'
                            onChange={handleChange}
                            value={data.direccion}
                            placeholder="Dirección"
                            suffix={
                                <Tooltip title="Ingrese su dirección">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />

                        <input type="file" name='imagen' onChange={handleImg} />

                        <Button type="primary" htmlType="submit">
                            Registrarse
                        </Button>
                    </Form>
                </ContentDiv>
                <LogoutOutlined   style={{color: "blue", fontSize: "50px"}}  />
                <LogoutOutlined spin={true} style={{color: "red", fontSize: "50px"}} />
                <LogoutOutlined   style={{color: "blue", fontSize: "50px"}}  rotate={90} />

            </Content>
        </>

    );
};

export default RegistroEst;