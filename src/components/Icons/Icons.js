export const NotFound = () => (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 600"
    >
        <g>
            <defs>
                <clipPath id="GlassClip">
                    <path
                        d="M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5
                s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13
                c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"
                    />
                </clipPath>
                <clipPath id="cordClip">
                    <rect width="800" height="600" />
                </clipPath>
            </defs>

            <g id="planet">
                <circle
                    fill="none"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    cx="572.859"
                    cy="108.803"
                    r="90.788"
                />

                <circle
                    id="craterBig"
                    fill="none"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    cx="548.891"
                    cy="62.319"
                    r="13.074"
                />

                <circle
                    id="craterSmall"
                    fill="none"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    cx="591.743"
                    cy="158.918"
                    r="7.989"
                />
                <path
                    id="ring"
                    fill="none"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="
			M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408
			c0-3.378-15.347-4.988-40.243-7.225"
                />

                <path
                    id="ringShadow"
                    opacity="0.5"
                    fill="none"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="
			M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"
                />
            </g>
            <g id="stars">
                <g id="starsBig">
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="518.07"
                            y1="245.375"
                            x2="518.07"
                            y2="266.581"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="508.129"
                            y1="255.978"
                            x2="528.01"
                            y2="255.978"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="154.55"
                            y1="231.391"
                            x2="154.55"
                            y2="252.598"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="144.609"
                            y1="241.995"
                            x2="164.49"
                            y2="241.995"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="320.135"
                            y1="132.746"
                            x2="320.135"
                            y2="153.952"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="310.194"
                            y1="143.349"
                            x2="330.075"
                            y2="143.349"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="200.67"
                            y1="483.11"
                            x2="200.67"
                            y2="504.316"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="210.611"
                            y1="493.713"
                            x2="190.73"
                            y2="493.713"
                        />
                    </g>
                </g>
                <g id="starsSmall">
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="432.173"
                            y1="380.52"
                            x2="432.173"
                            y2="391.83"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="426.871"
                            y1="386.175"
                            x2="437.474"
                            y2="386.175"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="489.555"
                            y1="299.765"
                            x2="489.555"
                            y2="308.124"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="485.636"
                            y1="303.945"
                            x2="493.473"
                            y2="303.945"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="231.468"
                            y1="291.009"
                            x2="231.468"
                            y2="299.369"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="227.55"
                            y1="295.189"
                            x2="235.387"
                            y2="295.189"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="244.032"
                            y1="547.539"
                            x2="244.032"
                            y2="555.898"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="247.95"
                            y1="551.719"
                            x2="240.113"
                            y2="551.719"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="186.359"
                            y1="406.967"
                            x2="186.359"
                            y2="415.326"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="190.277"
                            y1="411.146"
                            x2="182.44"
                            y2="411.146"
                        />
                    </g>
                    <g>
                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="480.296"
                            y1="406.967"
                            x2="480.296"
                            y2="415.326"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            x1="484.215"
                            y1="411.146"
                            x2="476.378"
                            y2="411.146"
                        />
                    </g>
                </g>
                <g id="circlesBig">
                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="588.977"
                        cy="255.978"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="450.066"
                        cy="320.259"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="168.303"
                        cy="353.753"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="429.522"
                        cy="201.185"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="200.67"
                        cy="176.313"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="133.343"
                        cy="477.014"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="283.521"
                        cy="568.033"
                        r="7.952"
                    />

                    <circle
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        cx="413.618"
                        cy="482.387"
                        r="7.952"
                    />
                </g>
                <g id="circlesSmall">
                    <circle fill="#0E0620" cx="549.879" cy="296.402" r="2.651" />
                    <circle fill="#0E0620" cx="253.29" cy="229.24" r="2.651" />
                    <circle fill="#0E0620" cx="434.824" cy="263.931" r="2.651" />
                    <circle fill="#0E0620" cx="183.708" cy="544.176" r="2.651" />
                    <circle fill="#0E0620" cx="382.515" cy="530.923" r="2.651" />
                    <circle fill="#0E0620" cx="130.693" cy="305.608" r="2.651" />
                    <circle fill="#0E0620" cx="480.296" cy="477.014" r="2.651" />
                </g>
            </g>
            <g id="spaceman" clipPath="url(cordClip)">
                <path
                    id="cord"
                    fill="none"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
			M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548
			c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"
                />

                <path
                    id="backpack"
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
			M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537
			c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537
			C360.647,451.083,349.251,457.661,338.164,454.689z"
                />
                <g id="antenna">
                    <line
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="323.396"
                        y1="236.625"
                        x2="295.285"
                        y2="353.753"
                    />
                    <circle
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        cx="323.666"
                        cy="235.617"
                        r="6.375"
                    />
                </g>
                <g id="armR">
                    <path
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0
				c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"
                    />

                    <path
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793
				c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046
				C375.625,437.355,383.087,437.973,388.762,434.677z"
                    />
                </g>
                <g id="armL">
                    <path
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0
				c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"
                    />

                    <path
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096
				c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59
				C252.013,404.214,245.243,401.017,241.978,395.324z"
                    />
                </g>
                <g id="body">
                    <path
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14
				c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0
				c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"
                    />
                    <path
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"
                    />
                </g>
                <g id="legs">
                    <g id="legR">
                        <path
                            fill="#FFFFFF"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
					M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534
					C333.451,455.886,323.526,457.387,312.957,456.734z"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="304.883"
                            y1="486.849"
                            x2="330.487"
                            y2="493.713"
                        />
                    </g>
                    <g id="legL">
                        <path
                            fill="#FFFFFF"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
					M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534
					C278.993,441.286,286.836,447.55,296.315,452.273z"
                        />

                        <line
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="262.638"
                            y1="475.522"
                            x2="288.241"
                            y2="482.387"
                        />
                    </g>
                </g>
                <g id="head">
                    <ellipse
                        transform="matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)"
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        cx="341.295"
                        cy="315.211"
                        rx="61.961"
                        ry="60.305"
                    />
                    <path
                        id="headStripe"
                        fill="none"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"
                    />

                    <path
                        fill="#FFFFFF"
                        stroke="#0E0620"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
				M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192
				c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087
				s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"
                    />
                    <g clipPath="url(#GlassClip)">
                        <polygon
                            id="glassShine"
                            fill="none"
                            stroke="#0E0620"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            points="
					278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 				"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export const UploadIcon = ({ width = '32px', height = '32px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1571 13.8359L21.9247 12.3786C21.4686 9.51917 18.9876 7.3335 16 7.3335C12.6863 7.3335 10 10.0197 9.99996 13.3334L10.0011 15.2304L8.11578 15.3398C6.19293 15.4513 4.66663 17.0482 4.66663 19.0002C4.66663 21.0252 6.30825 22.6668 8.33329 22.6668H15.3333V17.0813L14.1785 18.236C13.9182 18.4964 13.4961 18.4964 13.2357 18.236L12.7643 17.7646C12.504 17.5043 12.504 17.0822 12.7643 16.8218L15.862 13.7242C16.1223 13.4638 16.5444 13.4638 16.8048 13.7242L19.9024 16.8218C20.1628 17.0822 20.1628 17.5043 19.9024 17.7646L19.431 18.236C19.1706 18.4964 18.7485 18.4964 18.4882 18.236L17.3333 17.0811V22.6668H23C25.3932 22.6668 27.3333 20.7267 27.3333 18.3335C27.3333 16.151 25.7179 14.3423 23.6181 14.0437L22.1571 13.8359ZM8.33329 24.6668H15.3333H17.3333H23C26.4978 24.6668 29.3333 21.8313 29.3333 18.3335C29.3333 15.1411 26.9714 12.5005 23.8997 12.0636C23.2913 8.24881 19.9861 5.3335 16 5.3335C11.5817 5.3335 7.99996 8.91522 7.99996 13.3335L7.99996 13.3431C5.0255 13.5157 2.66663 15.9824 2.66663 19.0002C2.66663 22.1298 5.20368 24.6668 8.33329 24.6668Z"
        ></path>
    </svg>
);

export const MessageIcon = ({ width = '26px', height = '26px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
        ></path>
    </svg>
);

export const InboxIcon = ({ width = '21px', height = '21px', className }) => (
    <svg
        class={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
        ></path>
    </svg>
);

export const SearchIcon = ({ width = '24px', height = '24px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        // fill="rgba(22, 24, 35, 0.34)"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
        ></path>
    </svg>
);

export const LoadingIcon = ({ width = '23px', height = '23px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="rgba(22, 24, 35, 0.34)"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12.5C17.6487 12.5 12.5 17.6487 12.5 24C12.5 30.3513 17.6487 35.5 24 35.5C26.8172 35.5 29.3919 34.4902 31.3919 32.8101C32.4491 31.9219 34.026 32.059 34.9142 33.1161C35.8023 34.1733 35.6653 35.7503 34.6081 36.6384C31.741 39.0471 28.0369 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 25.3807 39.3807 26.5 38 26.5C36.6193 26.5 35.5 25.3807 35.5 24C35.5 17.6487 30.3513 12.5 24 12.5Z"
        ></path>
    </svg>
);

export const HomeActiveIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
        ></path>
    </svg>
);

export const HomeIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
        ></path>
    </svg>
);

export const UserGroupIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"
        ></path>
    </svg>
);

export const UserGroupActiveIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="rgba(254, 44, 85, 1.0)"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path>
        <path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path>
        <path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path>
        <path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path>
    </svg>
);

export const LiveIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"
        ></path>
        <path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path>
    </svg>
);

export const LiveActiveIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="rgba(254, 44, 85, 1.0)"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path>
        <path
            d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z"
            fill="white"
        ></path>
    </svg>
);

export const IconComment = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
        <use href="#svg-ellipsis-right-fill"></use>
    </svg>
);
