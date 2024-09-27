"use client";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function TerminalCopilot() {
  const [activeStep, setActiveStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const steps = [
    "teacher = crew.Teacher(",
    '    backstory="stoics teacher",',
    '    experience="20 years of teaching",',
    '    goal="teach stoic lessons",',
    '    target_audience="25 years old males"',
    ")",
    'teacher.course_outline(title="Stoics in 21st century")',
    'teacher.create_lesson(title="Memento mori")',
    'teacher.convert_to_output(output_type="blog")',
    'teacher.convert_to_output(output_type="video")',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeStep < steps.length) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, steps.length]);

  return (
    <div className="min-h-screen p-8 font-mono text-gray-100 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden bg-gray-800 rounded-lg shadow-2xl">
          <div className="flex items-center px-4 py-2 space-x-2 bg-gray-700">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-2 text-sm text-gray-400">bash</span>
          </div>
          <div className="p-4 space-y-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  index <= activeStep ? "opacity-100" : "opacity-0"
                }`}
              >
                <ChevronRight className="w-4 h-4 mt-1 mr-2 text-green-400" />
                <pre className="text-sm">
                  <code>{step}</code>
                </pre>
              </div>
            ))}
            {activeStep >= steps.length && (
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mt-1 mr-2 text-green-400" />
                <span
                  className={`text-sm ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ▋
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Idea to course in minutes</h1>
          <p className="mb-8 text-xl">Ancient wisdom, modern application.</p>
          <button className="px-6 py-3 font-semibold text-gray-900 transition-colors bg-green-500 rounded-lg hover:bg-green-400">
            Start Your Stoic Journey
          </button>
        </div>
      </div>
    </div>
  );
}
