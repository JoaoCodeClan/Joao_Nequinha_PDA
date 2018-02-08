require_relative("./testing_task_2.rb")
require("minitest/autorun")
require("minitest/rg")


class TestTaskTwo < MiniTest::Test



  def test_func1_returns_true

      assert_equal(true,func1(1) )
    end

    def test_func1_returns_false

        assert_equal(false,func1(2) )
  end

  def test_max_returns_higher_number
    result = max(100, 29);

      assert_equal(100,result )
    end

    def test_looper_returns_numbers


        assert_equal(1..10,looper() )
    end

#     def test_failure_passes
# func1(3);
#
# max(100,1)
#
#         assert_equal("Test Passed",failures() )
    end












end
