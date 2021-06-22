import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [Mpan, setMpan] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setMpan({
            loading: true,
            Meters: [{
                'meterType':'Pos',
                'numberofRegisters':'2',
                'OperatingMode':'Credit',
                'meterType':'Electric',
                'NumberofRegisters':'1',
                'OperatingMode':'Credit'
            }],
            error: false
        })
        axios.get(url)
            .then(response => {
                setMpan({
                    loading: false,
                    Meters: response.meters,
                    error: false
                })
            })
            .catch(() => {
                setMpan({
                    loading: false,
                    Meters: [],
                    error: true
                })
            })
    }, [url])

    return Mpan
}
