import { useEffect, useState } from "react";
import { PortInfo, SerialPort } from "tauri-plugin-serialplugin";
import NCTimer from "../../components/NCTimer";
import { NavLink } from "react-router";

type PortOptions = {
  name: string,
  value: string
}

export default function TimerPage() { 
  const [serialPorts, setSerialPorts] = useState<{[key: string]: PortInfo} | null>(null)
  const [portOptions, setPortOptions] = useState<PortOptions[]>([])
  const [selectedPort, setSelectedPort] = useState<string>("")

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60)

  useEffect(() => {
    SerialPort.available_ports().then((ports) => {
      setSerialPorts(ports)
    })
  }, [])

  useEffect(() => {
    if(serialPorts){
      setPortOptions(Object.keys(serialPorts).map((port) => ({
          name: port,
          value: port
        })
      ))
      setSelectedPort('')
    }
  }, [serialPorts])

  return (
    <div>
      <main className="h-full max-w-5xl m-auto flex flex-col gap-6 items-center justify-center">
        <h1 className="text-center font-bold text-2xl tracking-wider">
          NetCafe
        </h1>
        <NCTimer expiryTimestamp={time}/>

        <h1>Selected Port: {selectedPort}</h1>

        <select 
          name="selectedSerialPort"
          value={selectedPort}
          onChange={e => setSelectedPort(e.target.value)}
        >
          <option disabled>Please select one</option>
          <option value="COM1">COM1</option>
         {
           portOptions.map((port) => 
            <option value={port.value} key={port.name}>
              {port.name}
            </option>
          )
         }
        </select>
        <NavLink to="/session">
          Login
        </NavLink>
      </main>
    </div>
  )
}
