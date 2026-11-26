import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, MessageCircle, ArrowUpRight, Languages } from 'lucide-react';
import { aeratorProducts, probioticProducts, spareEquipmentProducts } from './catalogData';
import { siteText, useSiteLang } from './i18n';

const WHATSAPP_NUMBER = '919885717986';

type FormLang = 'en' | 'te';

const formCopy = {
  en: {
    formTitle: 'Your pond. Your plans.',
    langLabel: 'Form Language',
    nameLabel: 'Your name',
    namePh: 'Full name',
    phoneLabel: 'Phone number',
    phonePh: '+91 98857 17986',
    emailLabel: 'Email address (optional)',
    emailPh: 'you@company.com',
    interestLabel: "I'm interested in",
    chooseOption: 'Help me choose',
    areaLabel: 'Pond area (optional)',
    areaPh: 'Include units, e.g. 2 acres',
    locationLabel: 'Location',
    locationPh: 'Town / district / state',
    reqLabel: 'A little about your requirements',
    reqPh: 'Pond depth, available power, species or equipment needs…',
    submit: 'Send via WhatsApp',
    sentNote: 'Opening WhatsApp (+91 98857 17986) with your formatted enquiry…',
    fallbackLink: 'Open WhatsApp manually if it did not open'
  },
  te: {
    formTitle: 'మీ చెరువు. మీ ప్రణాళిక.',
    langLabel: 'ఫారమ్ భాష',
    nameLabel: 'మీ పేరు',
    namePh: 'మీ పూర్తి పేరు',
    phoneLabel: 'ఫోన్ నంబర్',
    phonePh: '+91 98857 17986',
    emailLabel: 'ఈమెయిల్ (ఐచ్ఛికం)',
    emailPh: 'you@company.com',
    interestLabel: 'మీకు ఆసక్తి ఉన్నవి',
    chooseOption: 'సరైనది ఎంచుకోవడానికి సహాయం చేయండి',
    areaLabel: 'చెరువు విస్తీర్ణం (ఐచ్ఛికం)',
    areaPh: 'ఉదా: 2 ఎకరాలు',
    locationLabel: 'ప్రాంతం / ఊరు',
    locationPh: 'ఊరు / జిల్లా / రాష్ట్రం',
    reqLabel: 'మీ అవసరాల గురించి వివరాలు',
    reqPh: 'చెరువు లోతు, విద్యుత్ (3-ఫేజ్ / 1-ఫేజ్), రొయ్యలు/చేపలు లేదా పరికరాల వివరాలు…',
    submit: 'వాట్సాప్‌లో పంపండి',
    sentNote: 'మీ వివరాలతో వాట్సాప్ (+91 98857 17986) ఓపెన్ అవుతోంది…',
    fallbackLink: 'వాట్సాప్ ఓపెన్ కాకపోతే ఇక్కడ క్లిక్ చేయండి'
  }
} as const;

export function QuotePage() {
  const location = useLocation();
  const { lang: siteLang } = useSiteLang();
  const page = siteText[siteLang].quotePage;
  const homeLabel = siteText[siteLang].common.home;

  /* Form-only language state: toggling this changes ONLY the form, not the page */
  const [formLang, setFormLang] = useState<FormLang>('en');
  const [waLink, setWaLink] = useState<string>('');
  const f = formCopy[formLang];

  const allItems = [
    ...aeratorProducts.map((p) => ({ id: p.id, name: p.name })),
    ...spareEquipmentProducts.map((p) => ({ id: p.id, name: p.name })),
    ...probioticProducts.map((p) => ({ id: p.id, name: p.name }))
  ];
  const preselected =
    allItems.find((p) => p.id === new URLSearchParams(location.search).get('product'))?.name || '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const val = (key: string) => String(fd.get(key) || '').trim();

    const name = val('Name');
    const phone = val('Phone');
    const email = val('Email');
    const interest = val('Interest') || 'Help me choose';
    const area = val('Pond area');
    const loc = val('Location');
    const reqs = val('Requirements');

    const lines = [
      '*SIRI AQUATIC — QUOTE ENQUIRY*',
      '',
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      email ? `*Email:* ${email}` : '',
      `*Interested In:* ${interest}`,
      area ? `*Pond Area:* ${area}` : '',
      `*Location:* ${loc}`,
      reqs ? `*Requirements:* ${reqs}` : '',
      '',
      'Please share pricing, availability, and specifications.'
    ];

    const message = lines.filter((line, idx, arr) => line !== '' || (idx > 0 && arr[idx - 1] !== '')).join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setWaLink(url);

    const popup = window.open(url, '_blank');
    if (popup) {
      popup.opener = null;
    } else {
      window.location.href = url;
    }
  };

  return (
    <section className="section inner" data-scroll="fade-up">
      <div className="breadcrumb">
        <Link to="/">{homeLabel}</Link>
        <span>/</span>
        <span>{page.breadcrumb}</span>
      </div>

      <div className="quote-grid">
        <div data-scroll="fade-right">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>
            {page.h1a}
            <br />
            {page.h1b}
          </h1>
          <p className="lead">{page.lead}</p>
          <div className="steps">
            {page.steps.map(([num, label]) => (
              <p key={num}>
                <span>{num}</span> {label}
              </p>
            ))}
          </div>
          <div className="notice">{page.notice}</div>
        </div>

        <form data-scroll="fade-left" className="quote-form" lang={formLang} onSubmit={handleSubmit}>
          <div className="quote-form-top">
            <h2>{f.formTitle}</h2>
            <div className="quote-lang-filter" role="group" aria-label={f.langLabel}>
              <Languages size={15} aria-hidden="true" />
              <button
                type="button"
                className={formLang === 'en' ? 'is-active' : ''}
                aria-pressed={formLang === 'en'}
                onClick={() => setFormLang('en')}
              >
                English
              </button>
              <button
                type="button"
                className={formLang === 'te' ? 'is-active' : ''}
                aria-pressed={formLang === 'te'}
                onClick={() => setFormLang('te')}
              >
                తెలుగు
              </button>
            </div>
          </div>

          <div className="form-row">
            <label>
              {f.nameLabel}
              <input name="Name" required autoComplete="name" placeholder={f.namePh} />
            </label>
            <label>
              {f.phoneLabel}
              <input
                name="Phone"
                type="tel"
                required
                autoComplete="tel"
                pattern="[0-9+\-\(\) ]{7,20}"
                placeholder={f.phonePh}
              />
            </label>
          </div>

          <label>
            {f.emailLabel}
            <input name="Email" type="email" autoComplete="email" placeholder={f.emailPh} />
          </label>

          <label>
            {f.interestLabel}
            <select name="Interest" defaultValue={preselected}>
              <option value="">{f.chooseOption}</option>
              <optgroup label={formLang === 'te' ? 'ఏరేటర్లు (Aerators)' : 'Aerators'}>
                {aeratorProducts.map((p) => (
                  <option key={p.id}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label={formLang === 'te' ? 'పరికరాలు & స్పేర్స్ (Equipment & Spares)' : 'Equipment & Spares'}>
                {spareEquipmentProducts.map((p) => (
                  <option key={p.id}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label={formLang === 'te' ? 'ప్రోబయోటిక్స్ (Probiotics & Pond Care)' : 'Probiotics & Pond Care'}>
                {probioticProducts.map((p) => (
                  <option key={p.id}>{p.name}</option>
                ))}
              </optgroup>
            </select>
          </label>

          <div className="form-row">
            <label>
              {f.areaLabel}
              <input name="Pond area" placeholder={f.areaPh} />
            </label>
            <label>
              {f.locationLabel}
              <input name="Location" required placeholder={f.locationPh} />
            </label>
          </div>

          <label>
            {f.reqLabel}
            <textarea name="Requirements" rows={4} placeholder={f.reqPh} />
          </label>

          <button className="button quote-wa-submit" type="submit">
            <span>{f.submit}</span>
            <MessageCircle size={18} />
          </button>

          {waLink && (
            <div className="quote-wa-status" role="status">
              <p className="success">
                <Check size={18} /> {f.sentNote}
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="quote-wa-fallback">
                {f.fallbackLink} <ArrowUpRight size={15} />
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default QuotePage;
