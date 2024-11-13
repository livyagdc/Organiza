import React from 'react';
import styles from './DynamicForm.module.css'; // Assumindo que o arquivo CSS esteja nomeado como form.module.css

export default function DynamicForm({ title, fields, buttonLabel, onSubmit }) {
  return (
    <div className={styles['form-container']}>
      <h2 className={styles['form-title']}>{title}</h2>
      <form className={styles['form']} onSubmit={onSubmit}>
        
        {fields.map((field, index) => (
          <div key={index} className={styles['input-div']}>
            <label className={styles['label']}>
              {field.label}
              {field.required && <span>*</span>}
            </label>
            {field.type === 'select' ? (
              <select
                className={styles['form-input']}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              >
                {field.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className={styles['form-input']}
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                required={field.required}
              />
            )}
            {field.error && <div className={styles['form-error']}>{field.error}</div>}
          </div>
        ))}
        <button className={styles['form-button']} type="submit">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

