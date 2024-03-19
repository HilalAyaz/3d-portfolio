import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "./../models/Fox";
import useAlert from "../hooks/useAlert";
import Loader from "./../components/Loader";
import Alert from "./../components/Alert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
  
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Hilal Ayaz",
          from_email: form.email,
          to_email: "itshilaal@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Your message has been received. Thank you!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
          if (formRef.current) {
            formRef.current.reset(); 
          }
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "I am sorry, I didn't receive your message. Please try again later.",
          type: "danger",
        });
      });
  };
  
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-screen">
      {alert.show && <Alert {...alert} />}
      
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text ">Don't be shy, drop me a line. </h1>
        <form
          className="flex flex-col gap-7 mt-14 w-full"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name..."
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="Enter your email..."
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Name
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Enter your message..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h=[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[.6, 0.35, 0]}
              rotation={[12.629, -0.7, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
      
    </section>
  );
};

export default Contact;
