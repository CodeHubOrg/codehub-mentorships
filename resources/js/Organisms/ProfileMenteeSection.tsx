import React from "react";
import Card from "@/Molecules/Card";

interface IProps {
	heading: string;
	menteeProfile?: {
		id: number;
		current_status: string;
		previous_experience: string;
		interests: string;
		specific_interests: string;
		mentoring_type?: string;
		timeframe?: string;
		suitable_time?: string;
		extra_info?: string;
		status?: number;
	};
}

const ProfileMenteeSection: React.FC<IProps> = ({ heading, menteeProfile }) => {
	const {
		current_status,
		previous_experience,
		interests,
		specific_interests,
		mentoring_type,
		timeframe,
		suitable_time,
		extra_info,
		status,
	} = menteeProfile;

	return (
		<Card heading={heading}>
			<p>
				<span className="mb-6 text-3x text-gray-800 font-semibold">
					Current status:
				</span>{" "}
				{current_status}
			</p>
			<p>
				<span className="mb-6 text-3x text-gray-800 font-semibold">
					Previous experience:
				</span>{" "}
				{previous_experience}
			</p>
			{interests && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Interests:
					</span>{" "}
					{interests}
				</p>
			)}
			{specific_interests && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Specific interests:
					</span>{" "}
					{specific_interests}
				</p>
			)}
			{mentoring_type && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						After some more general mentoring:
					</span>{" "}
					{mentoring_type}
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
			{suitable_time && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Suitable time:
					</span>{" "}
					{suitable_time}
				</p>
			)}
			{extra_info && (
				<p>
					<span className="mb-6 text-3x text-gray-800 font-semibold">
						Additional info:
					</span>{" "}
					{extra_info}
				</p>
			)}
			{status === 0 && (
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
