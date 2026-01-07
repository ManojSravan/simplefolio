import { SectionBadge } from "../common/SectionBadge";

export function Contact() {
  return (
    <section className="space-y-8 text-center">
      <div className="space-y-4">
        <SectionBadge label="Contact" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Get in Touch</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Want to chat? {" "}
          <a 
            href="https://cal.com/manoj-sravan-annivg/strategy-call" 
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
           Schedule a call directly here
          </a>{" "}
          and we can discuss your questions. Please note I do not respond to unsolicited messages.
        </p>
      </div>
    </section>
  )
}
