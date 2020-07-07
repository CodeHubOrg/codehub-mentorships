import React from "react";
import Card from "@/Molecules/Card";

interface IProps {
	heading: string;
	mentee_profile?: {
		id: number;
		currentstatus: string;
		previousexp: string;
		mentortype?: string;
		timeframe?: string;
		suitabletime?: string;
		extrainfo?: string;
		status?: string;
	};
}

const ProfileMenteeSection: React.FC<IProps> = ({
	heading,
	mentee_profile,
}) => {
	const {
		currentstatus,
		previousexp,
		mentortype,
		timeframe,
		suitabletime,
		extrainfo,
		status,
	} = mentee_profile;

	return (
		<Card heading={heading}>
			<p>
				<span className="mb-6 text-3x text-gray-800 font-semibold">
					Current status:
				</span>{" "}
				{currentstatus}
			</p>
			<p>
				<span className="mb-6 text-3x text-gray-800 font-semibold">
					Previous experience:
				</span>{" "}
				{previousexp}
			</p>
			{mentortype && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						After some more general mentoring:
					</span>{" "}
					{mentortype}
				</p>
			)}
			{timeframe && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Time frame:
					</span>{" "}
					{timeframe}
				</p>
			)}
			{suitabletime && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Suitable time:
					</span>{" "}
					{suitabletime}
				</p>
			)}
			{extrainfo && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Additional info:
					</span>{" "}
					{extrainfo}
				</p>
			)}
			{status === "Pending" && (
				<>
					<p>&nbsp;</p>
					<p>
						<em>Your registration is pending.</em>
					</p>
				</>
			)}
			{/* TODO: Add button "Edit mentee profile" */}
			<p>&nbsp;</p>
		</Card>
	);
};

export default ProfileMenteeSection;
