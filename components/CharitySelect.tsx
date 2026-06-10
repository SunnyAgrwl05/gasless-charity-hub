"use client";

type Props = {
    selected: string;
    setSelected: (value: string) => void;
};

export default function CharitySelect({
    selected,
    setSelected,
}: Props) {
    return (
        <div className="border p-4 rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">
                Select Charity
            </h2>

            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full p-2 border border-gray-500 bg-gray-900 text-white rounded"
            >
                <option>Education Fund</option>
                <option>Food Donation</option>
                <option>Medical Support</option>
                <option>Disaster Relief</option>
            </select>
        </div>
    );
}


