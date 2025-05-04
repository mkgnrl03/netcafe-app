
import { SerialPort, type PortInfo } from "tauri-plugin-serialplugin";

export const useSerialComPort = () => {

  const serialPorts = ref<{[key: string]: PortInfo} | null>(null)

  SerialPort.available_ports().then((ports) => {
    serialPorts.value = ports
  })

  const getComPorts = async () => {
    return serialPorts
  }


  return {
    serialPorts,
    getComPorts
  }
}