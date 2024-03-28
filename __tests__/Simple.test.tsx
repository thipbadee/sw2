import ReservationMenu from "@/components/ReservationMenu";
import { render, screen } from "@testing-library/react";

describe('ReservationMenu', () => {
    it('should have title', () => {
        //Arrange
        render(<ReservationMenu />);
        //Act
        const bannerText = screen.getByText('Sub-Menu Here');
        //Assert
        expect(bannerText).toBeInTheDocument();
    });
});