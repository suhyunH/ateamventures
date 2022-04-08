import axios,{AxiosResponse} from 'axios'
import { useEffect, useState } from 'react';
interface Data{
    id: number;
    title: string;
    client:string;
    due:string;
    count:number;
    amount:number;
    method:string[];
    material:string[];
    status:string;
}

interface ApiProps{
    data: Data[];
    loading:boolean;
}

const useDatas = ():ApiProps=>{
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] =useState<boolean>(false);
    useEffect(()=>{
        setLoading(true);
        const Datas =async()=>{
            const response:AxiosResponse<any> = await axios.get("http://localhost:3001/requests");
            setData(response.data);
            setLoading(false);
        }
        Datas();
    },[])
    return {data,loading};
}

export default useDatas;