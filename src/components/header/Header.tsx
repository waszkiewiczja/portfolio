import './Header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <svg width="540" height="240" id="grey-rect" className="grey-shape">
        <path
          d="M0 200 h250 a20,20 0 0 0 20,-20 v-50 a20,-20 0 0 1 20,-20 h50 a20,20 0 0 0 20,-20 v-100"
          fill="none"
          stroke="url(#grey-gradient)"
          strokeWidth="2"
          id="grey-shape-path"
        />
        <defs>
          <linearGradient id="grey-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(229, 216, 193)', stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(101, 97, 96)', stopOpacity: 0.5 }}
            />
          </linearGradient>
        </defs>
      </svg>

      <svg width="440" height="140" id="orange-rect" className="orange-shape">
        <path
          d="M330 0 v100 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-100"
          fill="none"
          stroke="url(#orange-gradient)"
          strokeWidth="2"
          id="orange-shape-path"
        />
        <defs>
          <linearGradient
            id="orange-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(255, 165, 0)', stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(255, 69, 0)', stopOpacity: 0.5 }}
            />
          </linearGradient>
        </defs>
      </svg>

      <svg width="700" height="340" id="blue-rect" className="blue-shape">
        <path
          d="M600 300 v-100 a20,20 0 0 0 -20,-20 h-500 a20,20 0 0 1 -20,-20 v-200"
          fill="none"
          stroke="url(#blue-gradient)"
          strokeWidth="1"
          id="blue-shape-path"
        />
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(64, 208, 241)', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(60, 16, 193)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </header>
  );
};
