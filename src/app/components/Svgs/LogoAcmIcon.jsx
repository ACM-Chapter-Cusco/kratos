export const LogoAcmIcon = ({ circleColor = "#A5B6CF", rectColor = "#0A84FF" }) => {
  return (
    <svg width="52" height="43" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="41" 
        cy="21.2132" 
        r="10.25" 
        stroke={circleColor} 
        strokeWidth="1.5"
      />
      <rect 
        x="1.41421" 
        y="21.2132" 
        width="28" 
        height="28" 
        rx="5" 
        transform="rotate(-45 1.41421 21.2132)" 
        stroke={rectColor} 
        strokeWidth="2"
      />
    </svg>
  );
};
