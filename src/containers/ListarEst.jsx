import React, { useEffect, useState } from 'react';
import { Layout, Table, Button } from 'antd';
import { url } from '../helpers/url';


const ListarEst = () => {

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
            render: ac => (<Button onClick={(()=>deleteEst(ac.id))}>Delete</Button>)
          },
      ];
    return (
        <div>
          <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default ListarEst;