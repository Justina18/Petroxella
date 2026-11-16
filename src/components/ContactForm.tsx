import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contact, services } from "../data/content";
interface F {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
type S = "idle" | "sending" | "ok" | "fail";
const opts = [...services.map((s) => s.title), "General Inquiry"];
export default function ContactForm() {
  const [sp] = useSearchParams();
  const [st, setSt] = useState<S>("idle");
  const pre = sp.get("service") ?? "";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<F>({
    defaultValues: { service: opts.includes(pre) ? pre : "General Inquiry" },
  });
  const submit = (d: F) => {
    setSt("sending");
    const text = [
      "Hello Petroxella, I would like to make an inquiry.",
      `Name: ${d.name}`,
      `Company: ${d.company || "Not provided"}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Service: ${d.service}`,
      `Message: ${d.message}`,
    ].join("\n");
    const opened = window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSt(opened ? "ok" : "fail");
    if (opened) reset();
  };
  const f =
    "w-full border border-navy/25 rounded px-3 py-3 bg-white focus:outline-none focus:border-amber";
  const Err = ({ m }: { m?: string }) =>
    m ? (
      <p role="alert" className="text-sm text-red-700 mt-1">
        {m}
      </p>
    ) : null;
  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="grid md:grid-cols-2 gap-4"
    >
      <div>
        <label className="label block mb-1" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          className={f}
          {...register("name", { required: "Please enter your name" })}
        />
        <Err m={errors.name?.message} />
      </div>
      <div>
        <label className="label block mb-1" htmlFor="company">
          Company name
        </label>
        <input id="company" className={f} {...register("company")} />
      </div>
      <div>
        <label className="label block mb-1" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className={f}
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <Err m={errors.email?.message} />
      </div>
      <div>
        <label className="label block mb-1" htmlFor="phone">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          className={f}
          {...register("phone", {
            required: "Please enter a phone number",
            pattern: {
              value: /^[+\d][\d\s-]{6,}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        <Err m={errors.phone?.message} />
      </div>
      <div className="md:col-span-2">
        <label className="label block mb-1" htmlFor="service">
          Service required
        </label>
        <select id="service" className={f} {...register("service")}>
          {opts.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label block mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={f}
          {...register("message", {
            required: "Please enter a message",
            minLength: {
              value: 10,
              message: "Please add a little more detail",
            },
          })}
        />
        <Err m={errors.message?.message} />
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button
          disabled={st === "sending"}
          className="bg-amber text-white px-6 py-3 rounded font-head font-medium disabled:opacity-60"
        >
          {st === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        <p role="status" className="text-sm">
          {st === "ok" && "WhatsApp opened with your inquiry drafted."}
          {st === "fail" &&
            "Please allow pop-ups to open WhatsApp, or use the WhatsApp button below."}
        </p>
      </div>
    </form>
  );
}
