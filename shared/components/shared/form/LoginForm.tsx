import React from "react"
import { useForm } from "react-hook-form"

interface Props {
  onClose?: VoidFunction
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm({ defaultValues: { email: "", password: "" } })
  return <div className=""></div>
}
