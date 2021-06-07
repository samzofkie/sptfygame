require "test_helper"

class EntrancesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get entrances_index_url
    assert_response :success
  end
end
