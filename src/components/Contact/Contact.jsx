import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useContent } from '../../hooks/useContent'
import { submitContactForm } from '../../services/api'
import './Contact.css'

export default function Contact() {
  const t = useContent()

  const contactSchema = z.object({
    name: z.string().trim().min(2, t.contact.nameError),
    email: z.string().trim().email(t.contact.emailError),
    message: z.string().trim().min(10, t.contact.messageError),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    const toastId = toast.loading(t.contact.sending)

    try {
      await submitContactForm(data)
      toast.update(toastId, {
        render: t.contact.successToast,
        type: 'success',
        isLoading: false,
        autoClose: 3500,
      })
      reset()
    } catch (error) {
      console.error('Contact form submission failed:', error)
      toast.update(toastId, {
        render: t.contact.errorToast,
        type: 'error',
        isLoading: false,
        autoClose: 3500,
      })
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-field">
            <label htmlFor="name">{t.contact.nameLabel}</label>
            <input
              id="name"
              type="text"
              placeholder={t.contact.namePlaceholder}
              autoComplete="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name')}
            />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">{t.contact.emailLabel}</label>
            <input
              id="email"
              type="email"
              placeholder={t.contact.emailPlaceholder}
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
            />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="message">{t.contact.messageLabel}</label>
            <textarea
              id="message"
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message')}
            />
            {errors.message && <span className="form-error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
            {isSubmitting ? t.contact.sending : t.contact.submit}
          </button>

          <p className="contact-direct">
            {t.contact.directLabel} <a href="mailto:berkee144@gmail.com">berkee144@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  )
}
