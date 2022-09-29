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

export const IconDip = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#161823"
            fillOpacity="0.75"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.313 7.96568C12.3665 7.65966 12.658 7.45498 12.964 7.50851C13.27 7.56203 13.4747 7.8535 13.4211 8.15951L12.0506 15.9952C11.997 16.3012 11.7056 16.5059 11.3996 16.4523C11.0936 16.3988 10.8889 16.1073 10.9424 15.8013L12.313 7.96568ZM16.2402 8.77448C15.96 8.48453 15.5058 8.48453 15.2256 8.77448C14.9454 9.06443 14.9454 9.53454 15.2256 9.82449L17.454 12.1307L15.2262 14.4364C14.946 14.7263 14.946 15.1964 15.2262 15.4864C15.5063 15.7763 15.9606 15.7763 16.2407 15.4864L19.4551 12.1598C19.4704 12.1439 19.4704 12.1182 19.4551 12.1023L19.2233 11.8623L19.2201 11.8586L19.2158 11.854L16.2402 8.77448ZM8.88972 15.4867C8.59977 15.7766 8.12966 15.7766 7.83971 15.4867L5.4207 13.0677L4.76017 12.4071L4.51191 12.1589C4.49603 12.143 4.49603 12.1173 4.51191 12.1014L7.83853 8.77477C8.12848 8.48482 8.59859 8.48482 8.88854 8.77477C9.17849 9.06472 9.17849 9.53482 8.88854 9.82478L6.58318 12.1301L8.88972 14.4367C9.17967 14.7266 9.17967 15.1967 8.88972 15.4867Z"
            fill="white"
        ></path>
    </svg>
);

export const IconFB = () => (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
            fill="white"
        ></path>
        <path
            d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z"
            fill="#0075FA"
        ></path>
    </svg>
);

export const IconWhat = () => (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
            fill="#25D366"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.9028 25.6129C30.5802 25.4515 28.9944 24.6713 28.6988 24.5635C28.4031 24.4559 28.1881 24.4021 27.9731 24.7249C27.758 25.0478 27.1399 25.7744 26.9517 25.9897C26.7636 26.2049 26.5754 26.2319 26.2529 26.0704C25.9303 25.909 24.891 25.5684 23.659 24.4694C22.7002 23.6141 22.0528 22.5579 21.8647 22.235C21.6765 21.9121 21.8446 21.7375 22.0061 21.5767C22.1512 21.4321 22.3287 21.2 22.4899 21.0116C22.6512 20.8233 22.705 20.6887 22.8125 20.4735C22.92 20.2582 22.8663 20.0699 22.7855 19.9085C22.7049 19.747 22.0599 18.1593 21.7911 17.5134C21.5293 16.8845 21.2634 16.9697 21.0654 16.9598C20.8774 16.9504 20.6622 16.9484 20.4472 16.9484C20.2322 16.9484 19.8827 17.0291 19.587 17.352C19.2914 17.6749 18.4581 18.4553 18.4581 20.0428C18.4581 21.6306 19.6139 23.1643 19.7752 23.3795C19.9365 23.5949 22.0496 26.8528 25.2853 28.2499C26.0548 28.5823 26.6557 28.7807 27.1241 28.9293C27.8968 29.1749 28.5999 29.1402 29.1557 29.0572C29.7754 28.9646 31.064 28.277 31.3328 27.5235C31.6016 26.7699 31.6016 26.1242 31.521 25.9897C31.4404 25.8551 31.2253 25.7744 30.9028 25.6129ZM25.0178 33.6472H25.0134C23.0881 33.6465 21.1998 33.1292 19.5524 32.1517L19.1606 31.9191L15.0998 32.9844L16.1837 29.0251L15.9286 28.6191C14.8546 26.9109 14.2873 24.9365 14.2881 22.9091C14.2905 16.9934 19.1037 12.1805 25.022 12.1805C27.8879 12.1815 30.5817 13.299 32.6076 15.3271C34.6333 17.3551 35.7482 20.0509 35.7471 22.9178C35.7447 28.8339 30.9315 33.6472 25.0178 33.6472ZM34.1489 13.7858C31.7117 11.3458 28.4706 10.0014 25.0173 10C17.902 10 12.111 15.7906 12.1082 22.908C12.1073 25.1832 12.7017 27.4039 13.8313 29.3617L12 36.0509L18.8432 34.2559C20.7287 35.2843 22.8516 35.8264 25.0121 35.827H25.0174H25.0174C32.132 35.827 37.9234 30.0359 37.9263 22.9184C37.9276 19.4691 36.5861 16.2258 34.1489 13.7858Z"
            fill="white"
        ></path>
    </svg>
);

export const IconLink = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#FE2C55"
        ></path>
        <path
            d="M11.3028 15.2151C10.4934 16.0245 9.30444 16.016 8.6442 15.3557C7.98397 14.6955 7.97544 13.5065 8.78485 12.6971C9.06049 12.4215 9.06049 11.9745 8.78485 11.6989C8.5092 11.4232 8.06229 11.4232 7.78665 11.6989C6.49952 12.9861 6.36369 15.0716 7.646 16.354C8.92832 17.6363 11.0138 17.5005 12.301 16.2133L13.3248 15.1895C14.4068 14.1075 14.6713 12.4803 13.9787 11.2183C13.7911 10.8765 13.3621 10.7515 13.0203 10.9391C12.6786 11.1267 12.5536 11.5557 12.7412 11.8975C13.1094 12.5685 12.9986 13.5192 12.3266 14.1913L11.3028 15.2151ZM12.6972 8.7849C13.5066 7.97548 14.6956 7.984 15.3558 8.64425C16.016 9.30451 16.0246 10.4935 15.2152 11.3029C14.9395 11.5785 14.9395 12.0255 15.2152 12.3011C15.4908 12.5768 15.9377 12.5768 16.2134 12.3011C17.5005 11.0139 17.6363 8.92838 16.354 7.64603C15.0717 6.36368 12.9862 6.49951 11.699 7.78668L10.6752 8.8105C9.59325 9.89253 9.3287 11.5197 10.0213 12.7817C10.2089 13.1235 10.6379 13.2485 10.9797 13.0609C11.3214 12.8733 11.4464 12.4442 11.2588 12.1025C10.8906 11.4315 11.0014 10.4808 11.6734 9.80873L12.6972 8.7849ZM13.0336 12.6277C13.0186 12.3531 12.9459 12.0887 12.8178 11.8554C12.7737 11.7749 12.7493 11.6889 12.743 11.6029C12.7493 11.6889 12.7736 11.7749 12.8178 11.8554C12.9459 12.0888 13.0186 12.3531 13.0336 12.6277ZM13.2629 15.1276L12.2391 16.1514C10.9813 17.4093 8.95136 17.5356 7.70785 16.2921C7.11888 15.7031 6.83721 14.9377 6.8375 14.1615C6.8372 14.9377 7.11887 15.7031 7.70785 16.2921C8.95136 17.5357 10.9813 17.4093 12.2391 16.1515L13.2629 15.1277C13.8201 14.5704 14.1544 13.8662 14.2473 13.1452C14.1544 13.8661 13.8201 14.5704 13.2629 15.1276ZM8.90341 12.2276C8.89633 12.3759 8.8362 12.522 8.723 12.6352C8.28443 13.0738 8.07511 13.623 8.07481 14.147C8.07512 13.623 8.28444 13.0739 8.723 12.6353C8.83621 12.5221 8.89635 12.3759 8.90341 12.2276ZM12.6354 8.72306C13.4748 7.88361 14.7193 7.88401 15.4176 8.58241C15.6813 8.84604 15.8454 9.18748 15.9025 9.55557C15.8454 9.18746 15.6813 8.846 15.4176 8.58236C14.7193 7.88396 13.4748 7.88356 12.6354 8.72301L11.6116 9.74684C11.1715 10.1869 10.9613 10.7444 10.9635 11.2737C10.9613 10.7445 11.1715 10.187 11.6116 9.74689L12.6354 8.72306ZM11.2573 12.4817C11.244 12.6856 11.13 12.8786 10.9376 12.9842C10.6382 13.1485 10.2623 13.039 10.098 12.7396C9.88489 12.3514 9.76492 11.927 9.73407 11.4947C9.76493 11.9269 9.8849 12.3513 10.098 12.7396C10.2623 13.039 10.6382 13.1485 10.9376 12.9842C11.13 12.8786 11.244 12.6856 11.2573 12.4817ZM15.1103 11.9351C15.1348 12.0466 15.1903 12.1526 15.277 12.2393C15.5185 12.4808 15.91 12.4808 16.1515 12.2393C16.7 11.6908 17.0333 10.9955 17.1317 10.2827C17.0333 10.9955 16.6999 11.6908 16.1515 12.2392C15.91 12.4807 15.5185 12.4807 15.277 12.2392C15.1903 12.1526 15.1348 12.0466 15.1103 11.9351Z"
            fill="white"
        ></path>
    </svg>
);

export const IconTwitter = () => (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0002 47.001C36.7028 47.001 47.0002 36.7035 47.0002 24.001C47.0002 11.2984 36.7028 1.00098 24.0002 1.00098C11.2977 1.00098 1.00024 11.2984 1.00024 24.001C1.00024 36.7035 11.2977 47.001 24.0002 47.001Z"
            fill="#1DA1F2"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.2029 13.5327C37.3894 14.0824 35.5215 14.8813 34.6003 14.8813V14.8829C33.5484 13.7237 32.0675 13 30.4252 13C27.2353 13 24.6488 15.7287 24.6488 19.0925C24.6488 19.5598 24.7001 20.0157 24.795 20.4529H24.794C20.4671 20.3331 15.7348 18.0452 12.886 14.1294C11.1344 17.3277 12.6501 20.8848 14.6378 22.1809C13.9574 22.235 12.7049 22.0982 12.1153 21.4913C12.0758 23.6142 13.0434 26.4269 16.5714 27.4473C15.8919 27.8329 14.6892 27.7223 14.1662 27.6402C14.3497 29.4322 16.7285 31.775 19.3297 31.775C18.4026 32.9063 14.9144 34.9582 11 34.3054C13.6584 36.0118 16.7568 37 20.0362 37C29.3556 37 36.5929 29.0322 36.2034 19.2027C36.2019 19.1919 36.2019 19.1811 36.2009 19.1693C36.2019 19.144 36.2034 19.1187 36.2034 19.0925C36.2034 19.0619 36.2009 19.0331 36.2 19.0035C37.0484 18.3914 38.1868 17.3087 39 15.8836C38.5284 16.1577 37.1134 16.7064 35.7968 16.8426C36.6418 16.3615 37.8937 14.7858 38.2029 13.5327Z"
            fill="white"
        ></path>
    </svg>
);

export const IconLinkedIn = () => (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#0A66C2"></circle>
        <path
            d="M25.2775 21.8588C25.5235 21.4456 25.8234 21.067 26.1692 20.7329C26.6685 20.2507 27.2585 19.8724 27.9051 19.6199C28.5518 19.3675 29.2421 19.246 29.936 19.2625C31.0487 19.2625 32.1351 19.3862 33.1478 19.8886C34.6419 20.6251 35.3363 21.9324 35.6888 23.4765C35.9239 24.6175 36.0298 25.7813 36.0044 26.946C36.0044 29.7685 36.0044 32.5909 36.0044 35.416C36.0044 35.6633 35.9387 35.7317 35.6914 35.729C34.242 35.729 32.7979 35.7159 31.3433 35.729C31.0803 35.729 31.0119 35.6659 31.0145 35.4029C31.025 32.7251 31.025 30.0482 31.0145 27.3722C31.0217 26.806 30.9679 26.2407 30.854 25.686C30.5252 24.1867 29.5835 23.5002 28.0553 23.6527C26.527 23.8053 25.6879 24.6891 25.4827 26.3384C25.4319 26.7652 25.4073 27.1948 25.409 27.6247C25.409 30.2183 25.409 32.8093 25.409 35.4029C25.409 35.6659 25.3354 35.7317 25.0776 35.729C23.6177 35.7159 22.1578 35.729 20.6979 35.729C20.4586 35.729 20.4033 35.6607 20.4033 35.4292C20.4033 30.2735 20.4033 25.1196 20.4033 19.9675C20.4033 19.7044 20.4849 19.6571 20.7242 19.6571C22.1105 19.6571 23.4967 19.6702 24.883 19.6571C25.146 19.6571 25.1986 19.7386 25.1933 19.978C25.1802 20.5935 25.1933 21.209 25.1933 21.8193L25.2775 21.8588Z"
            fill="#FDFEFE"
        ></path>
        <path
            d="M17.2574 27.6825C17.2574 30.2525 17.2574 32.825 17.2574 35.395C17.2574 35.658 17.2022 35.7316 16.9312 35.729C15.474 35.7159 14.0141 35.729 12.5542 35.729C12.3254 35.729 12.2517 35.6817 12.2517 35.437C12.2517 30.2744 12.2517 25.1108 12.2517 19.9464C12.2517 19.736 12.2938 19.6544 12.5148 19.6571C13.9948 19.6676 15.4749 19.6676 16.9549 19.6571C17.218 19.6571 17.2443 19.7491 17.2443 19.9675C17.2548 22.54 17.2574 25.1126 17.2574 27.6825Z"
            fill="#FDFDFE"
        ></path>
        <path
            d="M11.8755 14.5541C11.8755 13.9811 12.0456 13.4211 12.3642 12.9449C12.6829 12.4688 13.1357 12.0979 13.6654 11.8794C14.195 11.6608 14.7776 11.6045 15.3393 11.7174C15.901 11.8303 16.4165 12.1075 16.8206 12.5137C17.2246 12.92 17.4989 13.437 17.6088 13.9993C17.7186 14.5616 17.659 15.1439 17.4376 15.6723C17.2162 16.2008 16.8429 16.6516 16.365 16.9676C15.8871 17.2836 15.3261 17.4507 14.7532 17.4476C13.9896 17.44 13.2597 17.1322 12.7212 16.5907C12.1827 16.0493 11.8789 15.3177 11.8755 14.5541Z"
            fill="#FDFDFE"
        ></path>
    </svg>
);

export const IconTeleGram = () => (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="#37AEE2"
        ></path>
        <path
            d="M15.0708 25.1038L18.2549 33.5766C18.2549 33.5766 18.6529 34.3681 19.0782 34.3681C19.5035 34.3681 25.8443 28.0272 25.8443 28.0272L32.8947 14.9343L15.1822 22.9151L15.0708 25.1038Z"
            fill="#C8DAEA"
        ></path>
        <path
            d="M19.2945 27.2772L18.6827 33.5219C18.6827 33.5219 18.428 35.4351 20.4158 33.5219C22.4035 31.6087 24.3117 30.1328 24.3117 30.1328"
            fill="#A9C6D8"
        ></path>
        <path
            d="M15.1297 25.4063L8.5796 23.3553C8.5796 23.3553 7.79723 23.0492 8.04968 22.3583C8.10199 22.2161 8.20661 22.0937 8.51819 21.8838C9.96922 20.9108 35.378 12.1319 35.378 12.1319C35.378 12.1319 36.0967 11.9001 36.5198 12.0532C36.7131 12.1232 36.8382 12.2041 36.9405 12.4949C36.9792 12.5998 36.9996 12.8272 36.9974 13.0502C36.9951 13.212 36.9746 13.3607 36.9587 13.5969C36.8041 15.9977 32.1735 33.914 32.1735 33.914C32.1735 33.914 31.896 34.9614 30.9044 34.9985C30.5428 35.0116 30.1039 34.9417 29.5785 34.5066C27.6294 32.8951 20.8974 28.5439 19.41 27.5884C19.3258 27.5337 19.3031 27.4638 19.2872 27.396C19.2667 27.2954 19.3804 27.1708 19.3804 27.1708C19.3804 27.1708 31.1046 17.1522 31.4162 16.1004C31.4412 16.0195 31.3502 15.978 31.2274 16.013C30.4496 16.2885 16.9491 24.4836 15.4595 25.3888C15.373 25.4412 15.1297 25.4063 15.1297 25.4063Z"
            fill="white"
        ></path>
    </svg>
);

export const IconEmail = () => (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="#0DBEF3"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6327 14.8957C12.4779 14.8957 11.5417 15.8318 11.5417 16.9866V31.0131C11.5417 32.1679 12.4779 33.104 13.6327 33.104H34.3675C35.5223 33.104 36.4584 32.1679 36.4584 31.0131V16.9866C36.4584 15.8318 35.5223 14.8957 34.3675 14.8957H13.6327ZM33.7214 17.3809L24.0001 24.1142L14.2788 17.3809C13.9321 17.1407 13.4584 17.3889 13.4584 17.8106V19.0944L24.0001 26.396L34.5418 19.0944V17.8106C34.5418 17.3889 34.0681 17.1407 33.7214 17.3809Z"
            fill="white"
        ></path>
    </svg>
);

export const IconLogo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 48 48"
        width="40"
        height="40"
        data-e2e="browse-logo"
        className="tiktok-1ncsqqe-StyledLogo e11s2kul13"
    >
        <g fillRule="evenodd" clipPath="url(#logo-icon_svg__a)" clipRule="evenodd">
            <path
                fill="#000"
                d="M0 36c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V12c0-6.628-5.373-12-12-12H12C5.373 0 0 5.372 0 12v24z"
            ></path>
            <path
                fill="#25F4EE"
                d="M30.636 6.288A9.23 9.23 0 0130.35 4h-6.97v26.133c0 3.014-2.056 5.457-5.062 5.457-3.006 0-5.443-2.443-5.443-5.456 0-3.014 2.437-5.457 5.443-5.457.6 0 .797.098 1.337.278v-7.051c-.562-.079-.754-.12-1.337-.12C11.515 17.785 6 23.315 6 30.135c0 6.82 5.515 12.349 12.318 12.349 6.708 0 12.357-5.375 12.51-12.062V17.049c2.528 1.733 5.395 2.746 8.689 2.746V13.19c-4.275 0-7.866-2.933-8.88-6.902z"
            ></path>
            <path
                fill="#fff"
                d="M33.12 8.77a9.23 9.23 0 01-.287-2.288h-6.971v26.134c0 3.014-2.055 5.456-5.061 5.456s-5.443-2.442-5.443-5.456a5.45 5.45 0 015.443-5.456c.6 0 .797.097 1.337.277v-7.05c-.562-.08-.754-.12-1.337-.12-6.803 0-12.318 5.529-12.318 12.349S13.998 44.965 20.8 44.965c6.707 0 12.357-5.374 12.51-12.062V19.531c2.528 1.733 5.395 2.747 8.689 2.747v-6.606c-4.275 0-7.866-2.933-8.88-6.901z"
            ></path>
            <path
                fill="#FE2C55"
                d="M15.92 35.033a5.446 5.446 0 01-.562-2.416c0-3.014 2.437-5.457 5.443-5.457.523 0 .739.074 1.143.212l.194.066v-7.051l-.21-.03c-.411-.059-.623-.09-1.127-.09-.386 0-.769.018-1.146.053v4.635l-.194-.066c-.404-.138-.62-.212-1.143-.212-3.006 0-5.443 2.443-5.443 5.457a5.46 5.46 0 003.045 4.9zm-4.972 4.997a12.29 12.29 0 009.853 4.935c6.707 0 12.357-5.374 12.51-12.061V19.532c2.528 1.733 5.395 2.746 8.689 2.746v-6.605a9.2 9.2 0 01-2.483-.341v4.463c-3.294 0-6.161-1.013-8.69-2.746v13.372c-.152 6.688-5.802 12.062-12.509 12.062-2.763 0-5.314-.912-7.37-2.453zm23.455-28.401a9.206 9.206 0 01-3.715-5.146h2.145a9.155 9.155 0 001.57 5.146z"
            ></path>
        </g>
        <defs>
            <clipPath id="logo-icon_svg__a">
                <rect width="48" height="48" fill="#fff" rx="10.5"></rect>
            </clipPath>
        </defs>
    </svg>
);

export const IconShare = () => (
    <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.4588 3.90871C25.3403 2.86068 23.4902 3.64074 23.4902 5.16041V13.0502C20.4499 14.1752 11.3194 18.1407 6.6047 26.6176C-1.49677 42.1311 3.82522 43.478 5.77105 39.7411C13.2467 29.1857 20.8146 30.4298 23.4902 31.3209V38.2274C23.4902 39.7114 25.2658 40.5055 26.4023 39.5298L43.3681 24.9655C44.9268 23.6274 44.9791 21.2608 43.4811 19.8573L26.4588 3.90871Z"
        ></path>
    </svg>
);

export const ShareIcons = () => (
    <svg
        className="tiktok-3anilq-StyledShareIcon ee7zj8d16"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z"
            stroke="#161823"
            strokeWidth="2"
        ></path>
    </svg>
);

export const EditIcons = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="1em" height="1em">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.393 2.226a.842.842 0 00-1.17.02L8.142 8.33a.842.842 0 00-.247.595v2.34c0 .464.377.841.842.841h2.183a.842.842 0 00.596-.246l6.237-6.238a.843.843 0 00-.02-1.211l-2.34-2.184zM9.58 9.273l5.26-5.26 1.107 1.033-5.374 5.375h-.993V9.273zM9.58 2c.232 0 .42.189.42.421v.842a.421.421 0 01-.42.421H4.526a.842.842 0 00-.842.842v10.948c0 .465.377.842.842.842h10.947a.842.842 0 00.842-.842V10.42c0-.232.189-.421.421-.421h.842c.233 0 .422.188.422.421v5.053A2.526 2.526 0 0115.473 18H4.526A2.526 2.526 0 012 15.474V4.526A2.526 2.526 0 014.526 2H9.58z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const LockIcons = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"
        ></path>
    </svg>
);

export const LockIconsRegular = () => (
    <svg width="90" height="90" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 8.5C20.9624 8.5 18.5 10.9624 18.5 14V18.5H29.5V14C29.5 10.9624 27.0376 8.5 24 8.5ZM32.5 18.5V14C32.5 9.30558 28.6944 5.5 24 5.5C19.3056 5.5 15.5 9.30558 15.5 14V18.5H11C9.61929 18.5 8.5 19.6193 8.5 21V40C8.5 41.3807 9.61929 42.5 11 42.5H37C38.3807 42.5 39.5 41.3807 39.5 40V21C39.5 19.6193 38.3807 18.5 37 18.5H32.5ZM11.5 21.5V39.5H36.5V21.5H11.5Z"
        ></path>
    </svg>
);

export const IconUserNotVideos = () => (
    <svg width="90" height="90" viewBox="0 0 72 72" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6276 20.2241C16.6276 30.8074 25.2394 39.4192 35.8227 39.4192C46.4059 39.4192 55.0178 30.8074 55.0178 20.2241C55.0178 9.64086 46.4059 1.02899 35.8227 1.02899C25.2394 1.02899 16.6276 9.64086 16.6276 20.2241ZM19.7405 20.2244C19.7405 11.3583 26.9568 4.14202 35.8229 4.14202C44.689 4.14202 51.9053 11.3583 51.9053 20.2244C51.9053 29.0905 44.689 36.3068 35.8229 36.3068C26.9568 36.3068 19.7405 29.0905 19.7405 20.2244Z"
        ></path>
        <path d="M6.69813 70.9717C6.56844 70.9717 6.43874 70.9562 6.30904 70.9199C5.47898 70.7072 4.97576 69.8563 5.19365 69.0263C8.79922 55.045 21.3954 45.2762 35.8228 45.2762C50.2503 45.2762 62.8465 55.0398 66.4572 69.0211C66.6699 69.8512 66.1719 70.702 65.3366 70.9147C64.5014 71.1326 63.6558 70.6293 63.4379 69.7941C60.1851 57.1876 48.8288 48.3837 35.8176 48.3837C22.8117 48.3837 11.4554 57.1876 8.19743 69.7941C8.02104 70.5048 7.39331 70.9717 6.69813 70.9717Z"></path>
    </svg>
);

export const IconsUserUnFollow = () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0001 13C13.0001 9.68629 15.6864 7 19.0001 7C22.3139 7 25.0001 9.68629 25.0001 13C25.0001 16.3137 22.3139 19 19.0001 19C15.6864 19 13.0001 16.3137 13.0001 13ZM19.0001 3C13.4773 3 9.00015 7.47715 9.00015 13C9.00015 18.5228 13.4773 23 19.0001 23C24.523 23 29.0001 18.5228 29.0001 13C29.0001 7.47715 24.523 3 19.0001 3ZM5.19435 40.9681C6.70152 35.5144 10.0886 32.2352 13.9162 30.738C17.7125 29.2531 22.0358 29.4832 25.6064 31.2486C26.1015 31.4934 26.7131 31.338 26.9931 30.8619L28.0072 29.1381C28.2872 28.662 28.1294 28.0465 27.6384 27.7937C23.0156 25.4139 17.4034 25.0789 12.4591 27.0129C7.37426 29.0018 3.09339 33.3505 1.2883 40.0887C1.14539 40.6222 1.48573 41.1592 2.02454 41.2805L3.97575 41.7195C4.51457 41.8408 5.04724 41.5004 5.19435 40.9681ZM44.7074 30.1212C45.0979 29.7307 45.0979 29.0975 44.7074 28.707L43.2932 27.2928C42.9026 26.9023 42.2695 26.9023 41.8789 27.2928L30.0003 39.1715L25.1216 34.2928C24.7311 33.9023 24.0979 33.9023 23.7074 34.2928L22.2932 35.707C21.9026 36.0975 21.9026 36.7307 22.2932 37.1212L28.586 43.4141C29.3671 44.1952 30.6334 44.1952 31.4145 43.4141L44.7074 30.1212Z"
        ></path>
    </svg>
);

export const IconsEdit = () => (
    <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.5858 5.08579C27.3479 4.32371 28.5767 4.30253 29.3646 5.03789L36.8646 12.0379C37.2612 12.408 37.4904 12.9232 37.4997 13.4655C37.5091 14.0078 37.2977 14.5307 36.9142 14.9142L16.9142 34.9142C16.5391 35.2893 16.0304 35.5 15.5 35.5H8.5C7.39543 35.5 6.5 34.6046 6.5 33.5V26C6.5 25.4696 6.71071 24.9609 7.08579 24.5858L26.5858 5.08579ZM28.0479 9.2805L10.5 26.8284V31.5H14.6716L32.622 13.5496L28.0479 9.2805Z"
        ></path>
        <path d="M7 41C7 40.4477 7.44772 40 8 40H41C41.5523 40 42 40.4477 42 41V43C42 43.5523 41.5523 44 41 44H8C7.44772 44 7 43.5523 7 43V41Z"></path>
    </svg>
);

export const IconUpload = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5001 29H30.5C35.7467 29 40 24.7467 40 19.5C40 14.7115 36.4571 10.7504 31.8497 10.0951C30.937 4.37297 25.9792 0 20 0C13.3726 0 8 5.37258 8 12L8.00001 12.0145C3.53831 12.2733 0 15.9734 0 20.5C0 25.1944 3.80558 29 8.5 29H18.5001V17.1213L15.9143 19.7071C15.7191 19.9024 15.4025 19.9024 15.2072 19.7071L13.793 18.2929C13.5977 18.0976 13.5977 17.781 13.793 17.5858L18.9395 12.4393C19.5252 11.8536 20.475 11.8536 21.0608 12.4393L26.2072 17.5858C26.4025 17.781 26.4025 18.0976 26.2072 18.2929L24.793 19.7071C24.5977 19.9024 24.2812 19.9024 24.0859 19.7071L21.5001 17.1213V29Z"
            fill="#161823"
            fillOpacity="0.34"
        />
    </svg>
);

export const IconEmoj = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 23C18.6569 23 20 21.2091 20 19C20 16.7909 18.6569 15 17 15C15.3431 15 14 16.7909 14 19C14 21.2091 15.3431 23 17 23Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31 23C32.6569 23 34 21.2091 34 19C34 16.7909 32.6569 15 31 15C29.3431 15 28 16.7909 28 19C28 21.2091 29.3431 23 31 23Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 28.3431C16 31.4673 19.5817 36 24 36C28.4183 36 32 31.4673 32 28.3431C32 25.219 16 25.219 16 28.3431Z"
        ></path>
    </svg>
);

export const IconHomeMobile = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
        ></path>
    </svg>
);

export const IconSearch = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7764 10.5C16.1265 10.5 11.5 15.172 11.5 20.993C11.5 26.814 16.1265 31.486 21.7764 31.486C24.5005 31.486 26.9782 30.4054 28.8221 28.6314C30.8097 26.7191 32.0527 24.0079 32.0527 20.993C32.0527 15.172 27.4262 10.5 21.7764 10.5ZM8.5 20.993C8.5 13.5669 14.4184 7.5 21.7764 7.5C29.1344 7.5 35.0527 13.5669 35.0527 20.993C35.0527 24.2993 33.881 27.3328 31.9342 29.6817L38.3696 36.2355C38.7566 36.6296 38.7508 37.2627 38.3568 37.6497L37.6432 38.3503C37.2492 38.7373 36.616 38.7315 36.2291 38.3374L29.7742 31.7638C27.5523 33.4701 24.7814 34.486 21.7764 34.486C14.4184 34.486 8.5 28.4191 8.5 20.993Z"
        ></path>
    </svg>
);

export const IconUploadMobile = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 49" width="100%" height="100%">
        <path fill="#D8D8D8" stroke="#979797" stroke-width="0.5" d="M.25.25h74.5v48.5H.25z" opacity="0.01"></path>
        <path
            fill="#FA2D6C"
            fillRule="evenodd"
            d="M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#20D5EC"
            fillRule="evenodd"
            d="M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z"
            clipRule="evenodd"
        ></path>
        <rect width="36" height="28" x="19.5" y="10.5" fill="#fff" rx="8"></rect>
        <path
            fill="#161823"
            fillRule="evenodd"
            d="M36.5 18.25a.5.5 0 00-.5.5v4.75h-4.75a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5H36v4.75a.5.5 0 00.5.5H38a.5.5 0 00.5-.5V26h4.75a.5.5 0 00.5-.5V24a.5.5 0 00-.5-.5H38.5v-4.75a.5.5 0 00-.5-.5h-1.5z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const IconAddUpload = () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
        ></path>
    </svg>
);

export const IconMuteVolume = () => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"
        ></path>
    </svg>
);

export const IconNoMuteVolume = () => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
        ></path>
    </svg>
);
