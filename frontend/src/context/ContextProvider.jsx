import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        formData,
        setFormData,
        isLoading,
        setIsLoading,
        responseMessage,
        setResponseMessage,
        isSubmit,
        setIsSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
