import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124290.42567238341!2d121.15743722864607!3d13.220557457786608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc9574cce76b5b%3A0x55258520b47f16bc!2sNaujan%2C%20Oriental%20Mindoro%2C%20Philippines!5e0!3m2!1sen!2sus!4v1731666021252!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Naujan, Philippines" />
        <MyInfo field="email" value="kegabmaranan@gmail.com" />
        <MyInfo field="phone" value="+63 955 579 1093" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}