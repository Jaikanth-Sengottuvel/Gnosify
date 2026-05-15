"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(true);
  const phone = "916003633316";
  const message = encodeURIComponent("Hi Gnosify! I'd like to discuss a project with you.");

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.75rem',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .wa-tooltip { display: none !important; }
        }
      `}</style>
      {visible && (
        <div className="wa-tooltip" style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '0.6rem 0.8rem',
          fontSize: '0.8rem',
          color: 'var(--foreground)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          border: '1px solid rgba(27,87,128,0.08)',
          maxWidth: '160px',
          position: 'relative',
        }}>
          <button
            aria-label="Close tooltip"
            onClick={() => setVisible(false)}
            style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              lineHeight: 1,
              color: '#aaa',
            }}
          >
            <X size={12} />
          </button>
          <strong style={{ display: 'block', marginBottom: '0.15rem', color: 'var(--primary)', paddingRight: '0.8rem', fontSize: '0.85rem' }}>
            Chat with us!
          </strong>
          <span style={{ color: '#6b7280', lineHeight: 1.3, display: 'block', fontSize: '0.75rem' }}>
            We reply within minutes.
          </span>
        </div>
      )}

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          flexShrink: 0,
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 26px rgba(37,211,102,0.55)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)';
        }}
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
