import React from 'react';
import { Button, Checkbox, Form, Input, Tooltip  } from 'antd'
import { LockOutlined, InfoCircleOutlined  } from '@ant-design/icons'



const RegistroEst = () => {
    return (
        <div>
            <form>
                <Input
                name="name"
                onChange=" "
                placeholder="Ingrese Nombre Completo"
                prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                suffix={
                    <Tooltip title="Nombre y Apellido"> 
                         <InfoCircleOutlined 
                            style={{ color: "rgba(0,0,0,0.5)" }}
                         />
                 </Tooltip>
                }
                />
                <Button type="primary" htmlType="submit" >Registrar</Button>
            </form>
        </div>
    );
};

export default RegistroEst;