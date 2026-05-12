import { FormEvent, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  Headphones,
  LifeBuoy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  Send,
  ShieldCheck,
  User,
  Users,
  Zap,
} from 'lucide-react';

type Priority = 'critical' | 'urgent' | 'standard' | 'planning';

type IntakeForm = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  customerId: string;
  location: string;
  preferredContact: string;
  priority: Priority;
  category: string;
  affectedAreas: string[];
  summary: string;
  details: string;
  impact: string;
  desiredOutcome: string;
  availability: string;
  consent: boolean;
};

const priorityOptions: Array<{
  value: Priority;
  label: string;
  response: string;
  description: string;
  styles: string;
}> = [
  {
    value: 'critical',
    label: 'ER / Critical',
    response: 'Response target: 15 minutes',
    description: 'Service down, safety concern, VIP escalation, or customer cannot proceed.',
    styles: 'border-red-400/60 bg-red-500/10 text-red-100',
  },
  {
    value: 'urgent',
    label: 'Urgent',
    response: 'Response target: 1 hour',
    description: 'Major friction, deadline risk, or multiple customers/team members impacted.',
    styles: 'border-orange-400/60 bg-orange-500/10 text-orange-100',
  },
  {
    value: 'standard',
    label: 'Standard',
    response: 'Response target: same business day',
    description: 'A specific request, question, or problem that is not blocking work.',
    styles: 'border-blue-400/60 bg-blue-500/10 text-blue-100',
  },
  {
    value: 'planning',
    label: 'Planning',
    response: 'Response target: 2 business days',
    description: 'Future service need, onboarding request, process improvement, or discovery.',
    styles: 'border-emerald-400/60 bg-emerald-500/10 text-emerald-100',
  },
];

const categories = [
  'Account or billing',
  'Technical support',
  'Order or service update',
  'Product question',
  'Complaint or escalation',
  'New service request',
  'Other customer need',
];

const affectedAreaOptions = [
  'Account access',
  'Billing',
  'Delivery / fulfillment',
  'Website / app',
  'Product quality',
  'Scheduling',
  'Communication',
  'Other',
];

const initialForm: IntakeForm = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  customerId: '',
  location: '',
  preferredContact: 'Email',
  priority: 'urgent',
  category: 'Technical support',
  affectedAreas: [],
  summary: '',
  details: '',
  impact: '',
  desiredOutcome: '',
  availability: '',
  consent: false,
};

const inputClass =
  'w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20';

const labelClass = 'mb-2 block text-sm font-semibold text-slate-200';

function App() {
  const [form, setForm] = useState<IntakeForm>(initialForm);
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);

  const selectedPriority = useMemo(
    () => priorityOptions.find((option) => option.value === form.priority) ?? priorityOptions[1],
    [form.priority],
  );

  const ticketNumber = useMemo(() => {
    if (!submittedAt) {
      return '';
    }

    const timestamp = new Date(submittedAt).getTime().toString().slice(-6);
    return `CS-${timestamp}`;
  }, [submittedAt]);

  const updateField = <Field extends keyof IntakeForm>(field: Field, value: IntakeForm[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleAffectedArea = (area: string) => {
    setForm((current) => {
      const exists = current.affectedAreas.includes(area);
      return {
        ...current,
        affectedAreas: exists
          ? current.affectedAreas.filter((item) => item !== area)
          : [...current.affectedAreas, area],
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedAt(new Date().toISOString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmittedAt(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <header className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <LifeBuoy size={18} />
              Customer Service Intake ER
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tell us what happened. We will triage the next best action.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Use this form to capture the customer, the service need, urgency, impact, and the
              resolution you want. It is structured like an emergency intake so the support team can
              route critical requests first.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-6">
            <div className="mb-5 flex items-center gap-3 text-white">
              <ClipboardList className="text-cyan-300" size={28} />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Current triage</p>
                <h2 className="text-2xl font-bold">{selectedPriority.label}</h2>
              </div>
            </div>
            <div className={`rounded-2xl border p-4 ${selectedPriority.styles}`}>
              <p className="font-semibold">{selectedPriority.response}</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{selectedPriority.description}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <Clock className="mb-2 text-blue-300" size={20} />
                Capture urgency
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <Users className="mb-2 text-emerald-300" size={20} />
                Identify impact
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <MessageSquare className="mb-2 text-purple-300" size={20} />
                Clarify outcome
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <ShieldCheck className="mb-2 text-cyan-300" size={20} />
                Route safely
              </div>
            </div>
          </aside>
        </header>

        {submittedAt && (
          <section className="rounded-[2rem] border border-emerald-300/30 bg-emerald-400/10 p-6 shadow-xl shadow-emerald-950/20 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3 text-emerald-100">
                  <CheckCircle2 size={30} />
                  <h2 className="text-2xl font-bold">Intake ready for review</h2>
                </div>
                <p className="max-w-3xl text-slate-200">
                  Ticket {ticketNumber} has been prepared locally. Connect this form to your help
                  desk, CRM, or shared inbox when you are ready to send submissions automatically.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                <RefreshCw size={18} />
                Start new intake
              </button>
            </div>
          </section>
        )}

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Step 1
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Customer details</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Capture who needs help and the safest way to reach them.
              </p>
            </div>

            <div className="grid gap-5">
              <label>
                <span className={labelClass}>
                  <User className="mr-2 inline text-cyan-300" size={16} />
                  Full name *
                </span>
                <input
                  className={inputClass}
                  required
                  value={form.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  placeholder="Jane Smith"
                />
              </label>

              <label>
                <span className={labelClass}>
                  <Building2 className="mr-2 inline text-cyan-300" size={16} />
                  Company / organization
                </span>
                <input
                  className={inputClass}
                  value={form.company}
                  onChange={(event) => updateField('company', event.target.value)}
                  placeholder="Acme Co."
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className={labelClass}>
                    <Mail className="mr-2 inline text-cyan-300" size={16} />
                    Email *
                  </span>
                  <input
                    className={inputClass}
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="jane@example.com"
                  />
                </label>

                <label>
                  <span className={labelClass}>
                    <Phone className="mr-2 inline text-cyan-300" size={16} />
                    Phone
                  </span>
                  <input
                    className={inputClass}
                    type="tel"
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className={labelClass}>Customer / account ID</span>
                  <input
                    className={inputClass}
                    value={form.customerId}
                    onChange={(event) => updateField('customerId', event.target.value)}
                    placeholder="Optional"
                  />
                </label>

                <label>
                  <span className={labelClass}>
                    <MapPin className="mr-2 inline text-cyan-300" size={16} />
                    Location / time zone
                  </span>
                  <input
                    className={inputClass}
                    value={form.location}
                    onChange={(event) => updateField('location', event.target.value)}
                    placeholder="Chicago, CT"
                  />
                </label>
              </div>

              <label>
                <span className={labelClass}>Preferred contact method</span>
                <select
                  className={inputClass}
                  value={form.preferredContact}
                  onChange={(event) => updateField('preferredContact', event.target.value)}
                >
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Text message</option>
                  <option>Video call</option>
                </select>
              </label>
            </div>
          </section>

          <section className="space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Step 2
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Service need triage</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Select the ER level first, then describe the request in plain language.
              </p>
            </div>

            <fieldset>
              <legend className={labelClass}>
                <AlertTriangle className="mr-2 inline text-cyan-300" size={16} />
                Priority level *
              </legend>
              <div className="grid gap-3 md:grid-cols-2">
                {priorityOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-2xl border p-4 transition ${
                      form.priority === option.value
                        ? `${option.styles} shadow-lg shadow-cyan-950/20`
                        : 'border-slate-700 bg-slate-950/70 hover:border-slate-500'
                    }`}
                  >
                    <input
                      className="sr-only"
                      type="radio"
                      name="priority"
                      value={option.value}
                      checked={form.priority === option.value}
                      onChange={() => updateField('priority', option.value)}
                    />
                    <span className="block font-bold">{option.label}</span>
                    <span className="mt-1 block text-sm text-slate-300">{option.response}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className={labelClass}>
                  <Headphones className="mr-2 inline text-cyan-300" size={16} />
                  Request category *
                </span>
                <select
                  className={inputClass}
                  required
                  value={form.category}
                  onChange={(event) => updateField('category', event.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>

              <label>
                <span className={labelClass}>
                  <CalendarClock className="mr-2 inline text-cyan-300" size={16} />
                  Best times to reach you
                </span>
                <input
                  className={inputClass}
                  value={form.availability}
                  onChange={(event) => updateField('availability', event.target.value)}
                  placeholder="Today 2-5 PM, tomorrow morning, etc."
                />
              </label>
            </div>

            <fieldset>
              <legend className={labelClass}>Affected area(s)</legend>
              <div className="flex flex-wrap gap-3">
                {affectedAreaOptions.map((area) => {
                  const isChecked = form.affectedAreas.includes(area);
                  return (
                    <label
                      key={area}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        isChecked
                          ? 'border-cyan-300 bg-cyan-300/15 text-cyan-100'
                          : 'border-slate-700 bg-slate-950/70 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <input
                        className="sr-only"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAffectedArea(area)}
                      />
                      {area}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5">
              <label>
                <span className={labelClass}>
                  <Zap className="mr-2 inline text-cyan-300" size={16} />
                  One-line summary *
                </span>
                <input
                  className={inputClass}
                  required
                  value={form.summary}
                  onChange={(event) => updateField('summary', event.target.value)}
                  placeholder="Example: Cannot access dashboard before client meeting"
                />
              </label>

              <label>
                <span className={labelClass}>
                  <FileText className="mr-2 inline text-cyan-300" size={16} />
                  What happened? *
                </span>
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  required
                  value={form.details}
                  onChange={(event) => updateField('details', event.target.value)}
                  placeholder="Include what you tried, error messages, order numbers, screenshots to attach later, or who is involved."
                />
              </label>

              <label>
                <span className={labelClass}>Impact if this is not resolved</span>
                <textarea
                  className={`${inputClass} min-h-28 resize-y`}
                  value={form.impact}
                  onChange={(event) => updateField('impact', event.target.value)}
                  placeholder="Who is blocked, what deadline is at risk, and how many customers or team members are affected?"
                />
              </label>

              <label>
                <span className={labelClass}>Desired outcome</span>
                <textarea
                  className={`${inputClass} min-h-28 resize-y`}
                  value={form.desiredOutcome}
                  onChange={(event) => updateField('desiredOutcome', event.target.value)}
                  placeholder="Tell us what a successful resolution looks like."
                />
              </label>
            </div>

            <label className="flex gap-3 rounded-2xl border border-slate-700 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
              <input
                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-400"
                required
                type="checkbox"
                checked={form.consent}
                onChange={(event) => updateField('consent', event.target.checked)}
              />
              I confirm this intake can be used to contact me and route my customer service request
              to the right team.
            </label>

            <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200"
              >
                <Send size={18} />
                Generate intake ticket
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Clear form
              </button>
            </div>
          </section>
        </form>
      </section>
    </main>
  );
}

export default App;
