interface CheckoutFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
}

interface CheckoutFormProps {
  data: CheckoutFormData;
  onChange: (field: keyof CheckoutFormData, value: string) => void;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid var(--border, rgba(27,27,27,0.08))',
  borderRadius: 12,
  background: 'white',
  fontFamily: 'var(--sans, Inter, sans-serif)',
  fontSize: 14,
  color: 'var(--text, #1b1b1b)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 200ms ease, box-shadow 200ms ease',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--sans, Inter, sans-serif)',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--text, #1b1b1b)',
  marginBottom: 6,
};

const grid2: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 12,
};

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
  'Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
  'Lakshadweep', 'Puducherry',
];

export default function CheckoutForm({ data, onChange }: CheckoutFormProps) {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--green, #163b2e)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(22,59,46,0.08)';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--border, rgba(27,27,27,0.08))';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div
      style={{
        background: 'white',
        border: '1px solid var(--border, rgba(27,27,27,0.06))',
        borderRadius: '1.4rem',
        padding: '1.8rem 1.6rem',
        boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--serif, Georgia, serif)',
          fontSize: '1.2rem',
          color: 'var(--green, #163b2e)',
          marginBottom: '1.2rem',
          paddingBottom: '0.8rem',
          borderBottom: '1px solid var(--border, rgba(27,27,27,0.08))',
        }}
      >
        Shipping Address
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Name */}
        <div style={grid2}>
          <div>
            <label style={labelStyle} htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              style={inputStyle}
              value={data.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              style={inputStyle}
              value={data.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* Phone & Email */}
        <div style={grid2}>
          <div>
            <label style={labelStyle} htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              style={inputStyle}
              value={data.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              style={inputStyle}
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label style={labelStyle} htmlFor="addressLine1">Address Line 1 *</label>
          <input
            id="addressLine1"
            style={inputStyle}
            value={data.addressLine1}
            onChange={(e) => onChange('addressLine1', e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="addressLine2">Address Line 2</label>
          <input
            id="addressLine2"
            style={inputStyle}
            value={data.addressLine2}
            onChange={(e) => onChange('addressLine2', e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* City, State, PIN */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          <div>
            <label style={labelStyle} htmlFor="city">City *</label>
            <input
              id="city"
              style={inputStyle}
              value={data.city}
              onChange={(e) => onChange('city', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="state">State *</label>
            <select
              id="state"
              style={inputStyle}
              value={data.state}
              onChange={(e) => onChange('state', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            >
              <option value="">Select</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle} htmlFor="pinCode">PIN Code *</label>
            <input
              id="pinCode"
              style={inputStyle}
              value={data.pinCode}
              onChange={(e) => onChange('pinCode', e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              maxLength={6}
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label style={labelStyle} htmlFor="country">Country *</label>
          <select
            id="country"
            style={inputStyle}
            value={data.country}
            onChange={(e) => onChange('country', e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          >
            <option value="">Select</option>
            <option value="India">India</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export type { CheckoutFormData };

