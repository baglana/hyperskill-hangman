from hstest import StageTest, dynamic_test, TestedProgram, WrongAnswer, CheckResult


class HangmanTest(StageTest):

    @dynamic_test()
    def test_should_print_correct_announcement(self):
        correct_announcement = """H A N G M A N\nThe game will be available soon."""
        pr = TestedProgram(self.source_name)
        output = pr.start()

        if correct_announcement.strip() != output.strip():
            raise WrongAnswer('Please, print the output exactly like it is given in the example.')

        return CheckResult.correct()


if __name__ == '__main__':
    HangmanTest('hangman.hangman').run_tests()
