import { RSVPForm } from './RSVPForm';

export function RSVP() {
  return (
    <section id="rsvp" className="min-h-screen flex items-center justify-center py-16 bg-[#fef9db]" style={{ scrollSnapAlign: 'start' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">
          RSVP
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Пожалуйста, подтвердите ваше участие до 1 августа 2026 года
        </p>

        <RSVPForm />
      </div>
    </section>
  );
}
