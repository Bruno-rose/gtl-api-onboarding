import React, { useState, useEffect } from "react";
import { EndpointInfo } from "../../types";
import { styles } from "./styles";

interface QueryPanelProps {
  endpoint: EndpointInfo;
  initialValues: Record<string, string>;
  onSubmit: (data: Record<string, string>) => void;
}

const QueryPanel: React.FC<QueryPanelProps> = ({
  endpoint,
  initialValues,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Initialize form with initial values or empty strings
    const initialFormData: Record<string, string> = {};
    endpoint.fields.forEach((field) => {
      initialFormData[field.name] = initialValues[field.name] || "";
    });
    setFormData(initialFormData);
  }, [endpoint, initialValues]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: Record<string, string> = {};
    endpoint.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header.wrapper}>
        <div className={styles.header.iconWrapper}>{endpoint.icon}</div>
        <h2 className={styles.header.title}>{endpoint.title}</h2>
      </div>

      <p className={styles.description}>{endpoint.description}</p>

      <form onSubmit={handleSubmit} className={styles.form.wrapper}>
        {endpoint.fields.map((field) => (
          <div key={field.name} className={styles.form.field.wrapper}>
            <label
              htmlFor={field.name}
              className={styles.form.field.label.wrapper}
            >
              {field.label}{" "}
              {field.required && (
                <span className={styles.form.field.label.required}>*</span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={4}
                className={`${styles.form.field.input.base} ${
                  errors[field.name]
                    ? styles.form.field.input.error
                    : styles.form.field.input.normal
                }`}
              />
            ) : (
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`${styles.form.field.input.base} ${
                  errors[field.name]
                    ? styles.form.field.input.error
                    : styles.form.field.input.normal
                }`}
              />
            )}

            {errors[field.name] && (
              <p className={styles.form.field.error}>{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className={styles.form.submit.wrapper}>
          <button type="submit" className={styles.form.submit.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryPanel;
