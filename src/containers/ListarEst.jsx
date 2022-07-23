import React, { useEffect, useState } from 'react';
import { Layout, Table, Button } from 'antd';
import { url } from '../helpers/url';
import { DeleteOutlined} from "@ant-design/icons"


const ListarEst = () => {

    const {Content} = Layout
        const [est, setEst]= useState([])

        const getData = async()=>{
            const resp = await fetch(url)
            const data = await resp.json()
            setEst(data)

        }

       const dataSource = est.map(user=>(
        {
                ...user,
                key: user.id

       }))

       const deleteEst = async id =>{
        try{
            const resp = await fetch(`https://appiyudith.herokuapp.com/registros/${id}`, {
                method: 'DELETE'

            })
            getData()
        }
        catch(error){
            console.log(error)
        }

       }


useEffect(() => {
  getData()
}, [])

useEffect(() => {
  
  }, [est])
  
    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre',
        },
        {
          title: 'Tipo de Documento',
          dataIndex: 'tipo',
          key: 'tipo',
        },
        {
          title: 'Documento',
          dataIndex: 'numero',
          key: 'numero',
        },
        {
            title: 'Foto',
            dataIndex: 'imagen',
            key: 'imagen',
            render: data => (<img style={{ width: "50px"}} src={data} alt=" " />)
          },
          {
            title: 'Accion',
            key: 'action',
            render: ac => (<Button onClick={(()=>deleteEst(ac.id))}><DeleteOutlined style={{ color: "red"}}/></Button>)
          },
      ];
    return (
        <Content
             style={{
        padding: '0 50px',
        margin: "50px auto 0 auto"
      }}>
          <Table dataSource={dataSource} columns={columns} />;
        </Content>
    );
};

export default ListarEst;