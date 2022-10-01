import { renderHook, act } from '@testing-library/react';
import useTestSuitesData from '.';

// this is a fraction of api/data.json
const TEST_SUITES = [
  {
    "id": 1,
    "test_suite_name": "Suite Mix Save Mental",
    "test_plans": [
      {
        "test_name": "Test Plan Stiff Any Main",
        "browser": "firefox",
        "instruction_count": 33
      },
      {
        "test_name": "Test Plan Pride Queen Travel",
        "browser": "edge",
        "instruction_count": 13
      },
      {
        "test_name": "Test Plan Harbor Still Determine",
        "browser": "edge",
        "instruction_count": 30
      },
      {
        "test_name": "Test Plan Loose Difficulty Dirty Kept",
        "browser": "firefox",
        "instruction_count": 14
      },
      {
        "test_name": "Test Plan Extra Collect Entire Milk",
        "browser": "safari",
        "instruction_count": 35
      },
      {
        "test_name": "Test Plan Major Pet Program Dangerous",
        "browser": "edge",
        "instruction_count": 31
      }
    ]
  },
  {
    "id": 2,
    "test_suite_name": "Suite Dropped Shown Warm",
    "test_plans": [
      {
        "test_name": "Test Plan Famous Conversation",
        "browser": "safari",
        "instruction_count": 34
      },
      {
        "test_name": "Test Plan Edge Golden",
        "browser": "safari",
        "instruction_count": 8
      },
      {
        "test_name": "Test Plan Mud Any",
        "browser": "safari",
        "instruction_count": 1
      },
      {
        "test_name": "Test Plan Horn Area Cloth",
        "browser": "firefox",
        "instruction_count": 20
      },
      {
        "test_name": "Test Plan Useful Interior Dish",
        "browser": "safari",
        "instruction_count": 15
      },
      {
        "test_name": "Test Plan His Metal Tell Draw",
        "browser": "chrome",
        "instruction_count": 24
      },
      {
        "test_name": "Test Plan Rule Old Harder Now",
        "browser": "firefox",
        "instruction_count": 33
      },
      {
        "test_name": "Test Plan Breakfast Nobody More All",
        "browser": "chrome",
        "instruction_count": 33
      },
      {
        "test_name": "Test Plan Arrange Combination Mud Sunlight",
        "browser": "firefox",
        "instruction_count": 31
      },
      {
        "test_name": "Test Plan Vote Waste Even",
        "browser": "firefox",
        "instruction_count": 3
      },
      {
        "test_name": "Test Plan Fight Soft Fireplace Religious",
        "browser": "chrome",
        "instruction_count": 7
      },
      {
        "test_name": "Test Plan Ride Softly Globe Saw",
        "browser": "edge",
        "instruction_count": 1
      },
      {
        "test_name": "Test Plan Railroad Distance Smooth",
        "browser": "edge",
        "instruction_count": 31
      },
      {
        "test_name": "Test Plan Doll Sick Right Mental",
        "browser": "firefox",
        "instruction_count": 21
      },
      {
        "test_name": "Test Plan Bet Feet Giant",
        "browser": "safari",
        "instruction_count": 3
      },
      {
        "test_name": "Test Plan Firm Be Bare",
        "browser": "edge",
        "instruction_count": 20
      },
      {
        "test_name": "Test Plan Pencil Common Joy Gold",
        "browser": "safari",
        "instruction_count": 12
      },
      {
        "test_name": "Test Plan Arrive Policeman Plane Throw",
        "browser": "chrome",
        "instruction_count": 10
      },
      {
        "test_name": "Test Plan Battle Second Contrast",
        "browser": "safari",
        "instruction_count": 21
      },
      {
        "test_name": "Test Plan Difficult As",
        "browser": "firefox",
        "instruction_count": 11
      }
    ]
  },];

describe('useTestSuitesData', () => {
	it('should return the test suites data', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(TEST_SUITES),
			})
		);

		let hook;

		await act(async () => {
				hook = renderHook(() => useTestSuitesData());
		});
		

		expect(hook.result.current.testSuites).toEqual(TEST_SUITES);
	});
});