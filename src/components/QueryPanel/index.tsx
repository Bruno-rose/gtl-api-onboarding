import React, { useState, useEffect } from "react";
import { EndpointInfo } from "../App";

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
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <div className="flex items-center mb-4">
        <div className="mr-3 bg-blue-100 p-2 rounded-full">{endpoint.icon}</div>
        <h2 className="text-xl font-semibold text-gray-800">
          {endpoint.title}
        </h2>
      </div>

      <p className="text-gray-600 mb-6">{endpoint.description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {endpoint.fields.map((field) => (
          <div key={field.name} className="space-y-1">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={4}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
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
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}

            {errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryPanel;
