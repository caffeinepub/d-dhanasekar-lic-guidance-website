export default function VillupuramMapEmbed() {
  // Optional map - can be enabled/disabled
  const showMap = true;

  if (!showMap) {
    return null;
  }

  return (
    <div>
      <h2 className="mb-6 text-center text-3xl font-bold text-lic-text">Our Location</h2>
      <div className="overflow-hidden rounded-lg border-2 border-gray-200">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62563.64891234567!2d79.4920!3d11.9401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab0c6740b1%3A0x3e425c5c0e2d3e4f!2sVillupuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            className="absolute left-0 top-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Villupuram Location"
          />
        </div>
      </div>
    </div>
  );
}
